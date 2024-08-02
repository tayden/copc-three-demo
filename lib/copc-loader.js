import {Copc} from 'copc';
import {Octree} from './octree.js';
import {NodeLoader} from './node-loader.js';
import {Renderer} from './renderer.js';

export class CopcLoader {
    constructor(url, options = {}) {
        this.url = url;
        this.options = {
            maxPointsPerNode: 100000,
            pointBudget: 1000000,
            pointSize: 0.1,
            showOctree: false,
            ...options
        };
        this.copc = null;
        this.octree = null;
        this.nodeLoader = null;
        this.renderer = null;
        this.nodesMetadata = {};
        this.visibleNodes = new Set();
        this.totalLoadedPoints = 0;
    }

    async initialize() {
        try {
            this.copc = await Copc.create(this.url);
            this.octree = await this.buildOctree(this.copc.info.rootHierarchyPage);
            this.nodeLoader = new NodeLoader(this.url, this.copc, this.nodesMetadata);
            this.renderer = new Renderer(this.octree.box, this.options);
            this.updateOctreeVisualization();
            return true;
        } catch (error) {
            console.error("Error initializing COPC loader:", error);
            return false;
        }
    }

    async buildOctree(rootPage) {
        const [minX, minY, minZ, maxX, maxY, maxZ] = this.copc.info.cube;
        const boundingBox = {min: [minX, minY, minZ], max: [maxX, maxY, maxZ]};
        const octree = new Octree(boundingBox);
        octree.nodeKey = "0-0-0-0";

        try {
            const hierarchyData = await Copc.loadHierarchyPage(this.url, rootPage);
            for (const [nodeKey, nodeData] of Object.entries(hierarchyData.nodes)) {
                const [level, x, y, z] = nodeKey.split('-').map(Number);
                const box = this.calculateNodeBounds({level, x, y, z}, boundingBox);
                let octreeNode = nodeKey === "0-0-0-0" ? octree : octree.addNode(box);
                octreeNode.nodeKey = nodeKey;
                this.nodesMetadata[nodeKey] = {hierarchy: nodeData, octreeNode};
            }
        } catch (error) {
            console.error("Error loading root hierarchy:", error);
        }

        return octree;
    }

    calculateNodeBounds(key, parentBounds) {
        const {level, x, y, z} = key;
        const size = [
            parentBounds.max[0] - parentBounds.min[0],
            parentBounds.max[1] - parentBounds.min[1],
            parentBounds.max[2] - parentBounds.min[2]
        ];
        const halfSize = size.map(s => s / 2);
        const center = [
            parentBounds.min[0] + halfSize[0],
            parentBounds.min[1] + halfSize[1],
            parentBounds.min[2] + halfSize[2]
        ];

        center[0] += halfSize[0] * (x % 2 ? 0.5 : -0.5);
        center[1] += halfSize[1] * (y % 2 ? 0.5 : -0.5);
        center[2] += halfSize[2] * (z % 2 ? 0.5 : -0.5);

        return {
            min: [
                center[0] - halfSize[0] / 2,
                center[1] - halfSize[1] / 2,
                center[2] - halfSize[2] / 2
            ],
            max: [
                center[0] + halfSize[0] / 2,
                center[1] + halfSize[1] / 2,
                center[2] + halfSize[2] / 2
            ]
        };
    }

    async updateVisibleNodes(camera, frustum) {
        const loadQueue = this.traverseOctree(this.octree, camera, frustum);
        await this.loadNodes(loadQueue);
    }

    traverseOctree(node, camera, frustum, depth = 0, loadQueue = []) {
        if (!this.isNodeInFrustum(node, frustum)) {
            return loadQueue;
        }

        const metadata = this.nodesMetadata[node.nodeKey];
        if (metadata && metadata.hierarchy.pointCount) {
            const screenSize = this.getScreenSize(node, camera);
            if (screenSize > 10 || depth === 0) {
                if (!this.visibleNodes.has(node.nodeKey)) {
                    loadQueue.push({
                        node,
                        distance: this.getNodeDistance(node, camera)
                    });
                }
                for (const child of node.children) {
                    this.traverseOctree(child, camera, frustum, depth + 1, loadQueue);
                }
            } else if (!this.visibleNodes.has(node.nodeKey)) {
                loadQueue.push({node, distance: this.getNodeDistance(node, camera)});
            }
        }

        return loadQueue;
    }

    isNodeInFrustum(node, frustum) {
        const center = node.getCenter();
        const radius = Math.max(
            node.box.max[0] - node.box.min[0],
            node.box.max[1] - node.box.min[1],
            node.box.max[2] - node.box.min[2]
        ) / 2;
        return frustum.intersectsSphere({center, radius});
    }

    getScreenSize(node, camera) {
        const center = node.getCenter();
        const size = Math.max(
            node.box.max[0] - node.box.min[0],
            node.box.max[1] - node.box.min[1],
            node.box.max[2] - node.box.min[2]
        );
        const distance = this.getNodeDistance(node, camera);
        const fov = camera.fov * Math.PI / 180;
        const height = 2 * Math.tan(fov / 2) * distance;
        return (size / height) * window.innerHeight;
    }

    async loadNodes(loadQueue) {
        for (const {node, distance} of loadQueue) {
            if (this.totalLoadedPoints >= this.options.pointBudget) break;

            if (!this.visibleNodes.has(node.nodeKey)) {
                const metadata = this.nodesMetadata[node.nodeKey];
                if (metadata && metadata.hierarchy.pointCount) {
                    const pointsToLoad = Math.min(
                        metadata.hierarchy.pointCount,
                        this.options.pointBudget - this.totalLoadedPoints,
                        this.options.maxPointsPerNode
                    );
                    if (pointsToLoad > 0) {
                        const pointData = await this.nodeLoader.loadAndRenderNode(node.nodeKey, pointsToLoad);
                        if (pointData) {
                            this.renderer.addPoints(node.nodeKey, pointData);
                            this.visibleNodes.add(node.nodeKey);
                            this.totalLoadedPoints += pointData.count;
                        }
                    }
                }
            }
        }

        this.unloadDistantNodes(loadQueue[0].node.getCenter());
    }

    unloadDistantNodes(cameraPosition) {
        while (this.totalLoadedPoints > this.options.pointBudget) {
            const nodesToUnload = [...this.visibleNodes].sort((a, b) => {
                const distanceA = this.getNodeDistance(this.nodesMetadata[a].octreeNode, cameraPosition);
                const distanceB = this.getNodeDistance(this.nodesMetadata[b].octreeNode, cameraPosition);
                return distanceB - distanceA;
            });

            if (nodesToUnload.length === 0) break;
            this.unloadNode(nodesToUnload[0]);
        }
    }

    unloadNode(nodeKey) {
        const metadata = this.nodesMetadata[nodeKey];
        if (!metadata) return;

        this.renderer.removePoints(nodeKey);
        this.visibleNodes.delete(nodeKey);
        this.totalLoadedPoints -= metadata.hierarchy.pointCount;
    }

    getNodeDistance(node, cameraPosition) {
        const center = node.getCenter();
        return Math.sqrt(
            Math.pow(center[0] - cameraPosition[0], 2) +
            Math.pow(center[1] - cameraPosition[1], 2) +
            Math.pow(center[2] - cameraPosition[2], 2)
        );
    }

    updatePointSize(size) {
        this.options.pointSize = size;
        this.renderer.updatePointSize(size);
    }

    updatePointBudget(budget) {
        this.options.pointBudget = budget;
        this.updateVisibleNodes(this.renderer.camera, this.renderer.getCameraFrustum());
    }

    updateOctreeVisibility(visible) {
        this.options.showOctree = visible;
        this.updateOctreeVisualization();
    }

    updateOctreeVisualization() {
        if (this.options.showOctree) {
            this.renderer.visualizeOctree(this.octree);
        } else {
            this.renderer.removeOctreeVisualization();
        }
    }
}