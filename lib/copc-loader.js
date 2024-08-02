import { Copc } from "copc";
import { Octree } from "./octree.js";
import { NodeLoader } from "./node-loader.js";
import * as THREE from "three";

export class CopcLoader {
  constructor(url, options = {}) {
    this.url = url;
    this.options = {
      maxPointsPerNode: 500000,
      pointBudget: 5000000,
      minPointSize: 0.1,
      maxPointSize: 2.0,
      renderer: null,  // Add this line
      ...options,
    };
    this.copc = null;
    this.octree = null;
    this.nodeLoader = null;
    this.nodesMetadata = {};
    this.visibleNodes = new Set();
    this.totalLoadedPoints = 0;
    this.loadQueue = [];
    this.currentDepth = 0;
    this.isLoading = false;
    this.octreeVisualization = null;
    this.lastCameraPosition = null;
    this.lastFrustum = null;
    this.onPointCountUpdated = null;
  }

  async initialize() {
    try {
      console.log("Initializing COPC loader...");
      this.copc = await Copc.create(this.url);
      console.log("COPC created:", this.copc);
      this.octree = await this.buildOctree(this.copc.info.rootHierarchyPage);
      console.log("Octree built:", this.octree);
      this.nodeLoader = new NodeLoader(this.url, this.copc, this.nodesMetadata);
      console.log("NodeLoader created");
      this.updateOctreeVisualization();
      console.log("Octree visualization updated");
      return true;
    } catch (error) {
      console.error("Error initializing COPC loader:", error);
      return false;
    }
  }

  async loadNodes(cameraPosition) {
    if (this.isLoading) return;
    this.isLoading = true;

    console.log(
        `Starting loadNodes. Current total points: ${this.totalLoadedPoints}, Budget: ${this.options.pointBudget}`
    );

    while (
        this.loadQueue.length > 0 &&
        this.totalLoadedPoints < this.options.pointBudget
        ) {
      const nodesAtCurrentDepth = this.loadQueue.filter(
          (item) => item.depth === this.currentDepth
      );

      if (nodesAtCurrentDepth.length === 0) {
        this.currentDepth++;
        continue;
      }

      for (const { node } of nodesAtCurrentDepth) {
        if (!this.visibleNodes.has(node.nodeKey)) {
          const metadata = this.nodesMetadata[node.nodeKey];
          if (metadata && metadata.hierarchy.pointCount) {
            const pointsToLoad = Math.min(
                metadata.hierarchy.pointCount,
                this.options.pointBudget - this.totalLoadedPoints,
                this.options.maxPointsPerNode
            );
            if (pointsToLoad > 0) {
              console.log(
                  `Attempting to load ${pointsToLoad} points for node ${node.nodeKey}`
              );
              const pointData = await this.nodeLoader.loadAndRenderNode(
                  node.nodeKey,
                  pointsToLoad
              );
              if (pointData) {
                const points = this.createPointsObject(node.nodeKey, pointData);
                if (this.options.renderer && this.options.renderer.scene) {
                  this.options.renderer.scene.add(points);
                  this.visibleNodes.add(node.nodeKey);
                  this.totalLoadedPoints += pointData.count;
                  if (this.onPointsAdded) {
                    this.onPointsAdded(points);
                  }
                  console.log(
                      `Added ${pointData.count} points for node ${node.nodeKey}. Total points: ${this.totalLoadedPoints}`
                  );
                } else {
                  console.error("Renderer or scene is not available");
                }
              } else {
                console.log(`Failed to load points for node ${node.nodeKey}`);
              }
            }
          }
        }
      }

      // Remove processed nodes from the queue
      this.loadQueue = this.loadQueue.filter(
          (item) => item.depth !== this.currentDepth
      );

      if (this.totalLoadedPoints >= this.options.pointBudget) {
        break;
      }

      this.currentDepth++;
    }

    console.log(
        `Finished loadNodes. Final total points: ${this.totalLoadedPoints}`
    );
    this.updatePointCountDisplay();

    this.unloadDistantNodes(cameraPosition);
    this.isLoading = false;
  }


  unloadNode(nodeKey) {
    const metadata = this.nodesMetadata[nodeKey];
    if (!metadata) return;

    this.visibleNodes.delete(nodeKey);
    this.totalLoadedPoints -= metadata.hierarchy.pointCount;

    if (this.options.renderer && this.options.renderer.scene) {
      const points = this.options.renderer.scene.getObjectByName(nodeKey);
      if (points) {
        this.options.renderer.scene.remove(points);
        points.geometry.dispose();
        points.material.dispose();
      }
    }

    if (this.onPointsRemoved) {
      this.onPointsRemoved(nodeKey);
    }
    this.updatePointCountDisplay();
  }


  createPointsObject(nodeKey, pointData) {
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(pointData.positions, 3),
    );
    geometry.setAttribute(
        "color",
        new THREE.Float32BufferAttribute(pointData.colors, 3),
    );

    const material = new THREE.PointsMaterial({
      size: this.options.minPointSize,
      vertexColors: true,
      sizeAttenuation: true,
    });

    const points = new THREE.Points(geometry, material);
    points.name = nodeKey;

    // Compute bounding sphere for dynamic sizing
    geometry.computeBoundingSphere();

    return points;
  }

  updateVisibleNodes(camera, frustum) {
    this.lastCameraPosition = camera.position.clone();
    this.lastFrustum = frustum.clone();
    this.loadQueue = [];
    this.currentDepth = 0;
    this.traverseOctree(this.octree, camera, frustum);
    this.loadNodes(camera.position);
    this.updateDynamicPointSize(camera);
  }


  updateDynamicPointSize(camera) {
    if (this.options.renderer) {
      this.options.renderer.updatePointSizeDynamic();
    }
  }


  traverseOctree(node, camera, frustum, depth = 0) {
    if (!this.isNodeInFrustum(node, frustum)) {
      return;
    }

    const metadata = this.nodesMetadata[node.nodeKey];
    if (metadata && metadata.hierarchy.pointCount) {
      const distance = this.getNodeDistance(node, camera.position);

      // Add the current node to the load queue
      this.loadQueue.push({ node, distance, depth });
    }

    // Always check children, but limit depth to avoid excessive recursion
    if (depth < 20) {
      for (const child of node.children) {
        this.traverseOctree(child, camera, frustum, depth + 1);
      }
    }
  }


  updatePointSize(size) {
    this.options.pointSize = size;
    for (const nodeKey of this.visibleNodes) {
      const points = this.options.scene.getObjectByName(nodeKey);
      if (points) {
        points.material.size = size;
      }
    }
  }

  updateOctreeVisibility(visible) {
    this.options.showOctree = visible;
    this.updateOctreeVisualization();
  }

  updateOctreeVisualization() {
    if (this.options.showOctree) {
      if (!this.octreeVisualization) {
        this.octreeVisualization = new THREE.Group();
        this.visualizeOctree(this.octree, this.octreeVisualization);
        this.options.scene.add(this.octreeVisualization);
      }
    } else {
      if (this.octreeVisualization) {
        this.options.scene.remove(this.octreeVisualization);
        this.octreeVisualization.traverse((object) => {
          if (object.geometry) object.geometry.dispose();
          if (object.material) object.material.dispose();
        });
        this.octreeVisualization = null;
      }
    }
  }

  visualizeOctree(node, group) {
    const box = new THREE.Box3(
      new THREE.Vector3(node.box.min[0], node.box.min[1], node.box.min[2]),
      new THREE.Vector3(node.box.max[0], node.box.max[1], node.box.max[2]),
    );
    const helper = new THREE.Box3Helper(box, 0x00ff00);
    group.add(helper);

    for (const child of node.children) {
      this.visualizeOctree(child, group);
    }
  }

  unloadDistantNodes(cameraPosition) {
    const nodesToUnload = [...this.visibleNodes].sort((a, b) => {
      const distanceA = this.getNodeDistance(
        this.nodesMetadata[a].octreeNode,
        cameraPosition,
      );
      const distanceB = this.getNodeDistance(
        this.nodesMetadata[b].octreeNode,
        cameraPosition,
      );
      return distanceB - distanceA;
    });

    while (
      this.totalLoadedPoints > this.options.pointBudget &&
      nodesToUnload.length > 0
    ) {
      const nodeKey = nodesToUnload.pop();
      this.unloadNode(nodeKey);
    }
  }

  updatePointCountDisplay() {
    if (this.onPointCountUpdated) {
      this.onPointCountUpdated(this.totalLoadedPoints);
    }
  }

  isNodeInFrustum(node, frustum) {
    const center = new THREE.Vector3(
      (node.box.min[0] + node.box.max[0]) / 2,
      (node.box.min[1] + node.box.max[1]) / 2,
      (node.box.min[2] + node.box.max[2]) / 2,
    );
    const radius =
      Math.max(
        node.box.max[0] - node.box.min[0],
        node.box.max[1] - node.box.min[1],
        node.box.max[2] - node.box.min[2],
      ) / 2;
    return frustum.intersectsSphere(new THREE.Sphere(center, radius));
  }

  getScreenSize(node, camera) {
    const center = new THREE.Vector3(
      (node.box.min[0] + node.box.max[0]) / 2,
      (node.box.min[1] + node.box.max[1]) / 2,
      (node.box.min[2] + node.box.max[2]) / 2,
    );
    const size = Math.max(
      node.box.max[0] - node.box.min[0],
      node.box.max[1] - node.box.min[1],
      node.box.max[2] - node.box.min[2],
    );
    const distance = camera.position.distanceTo(center);
    const fov = (camera.fov * Math.PI) / 180;
    const height = 2 * Math.tan(fov / 2) * distance;
    return (size / height) * window.innerHeight;
  }

  updatePointBudget(budget) {
    this.options.pointBudget = budget;
    console.log(`Point budget updated to ${budget}`);
    if (this.lastCameraPosition && this.lastFrustum) {
      this.updateVisibleNodes(
        { position: this.lastCameraPosition },
        this.lastFrustum,
      );
    }
  }

  getNodeDistance(node, position) {
    const center = new THREE.Vector3(
      (node.box.min[0] + node.box.max[0]) / 2,
      (node.box.min[1] + node.box.max[1]) / 2,
      (node.box.min[2] + node.box.max[2]) / 2,
    );
    return center.distanceTo(position);
  }

  async buildOctree(rootPage) {
    const [minX, minY, minZ, maxX, maxY, maxZ] = this.copc.info.cube;
    const boundingBox = { min: [minX, minY, minZ], max: [maxX, maxY, maxZ] };
    const octree = new Octree(boundingBox);
    octree.nodeKey = "0-0-0-0";

    try {
      const hierarchyData = await Copc.loadHierarchyPage(this.url, rootPage);
      for (const [nodeKey, nodeData] of Object.entries(hierarchyData.nodes)) {
        const [level, x, y, z] = nodeKey.split("-").map(Number);
        const box = this.calculateNodeBounds({ level, x, y, z }, boundingBox);
        let octreeNode = nodeKey === "0-0-0-0" ? octree : octree.addNode(box);
        octreeNode.nodeKey = nodeKey;
        this.nodesMetadata[nodeKey] = { hierarchy: nodeData, octreeNode };
      }
    } catch (error) {
      console.error("Error loading root hierarchy:", error);
    }

    return octree;
  }

  calculateNodeBounds(key, parentBounds) {
    const { level, x, y, z } = key;
    const size = [
      parentBounds.max[0] - parentBounds.min[0],
      parentBounds.max[1] - parentBounds.min[1],
      parentBounds.max[2] - parentBounds.min[2],
    ];
    const halfSize = size.map((s) => s / 2);
    const center = [
      parentBounds.min[0] + halfSize[0],
      parentBounds.min[1] + halfSize[1],
      parentBounds.min[2] + halfSize[2],
    ];

    center[0] += halfSize[0] * (x % 2 ? 0.5 : -0.5);
    center[1] += halfSize[1] * (y % 2 ? 0.5 : -0.5);
    center[2] += halfSize[2] * (z % 2 ? 0.5 : -0.5);

    return {
      min: [
        center[0] - halfSize[0] / 2,
        center[1] - halfSize[1] / 2,
        center[2] - halfSize[2] / 2,
      ],
      max: [
        center[0] + halfSize[0] / 2,
        center[1] + halfSize[1] / 2,
        center[2] + halfSize[2] / 2,
      ],
    };
  }
}
