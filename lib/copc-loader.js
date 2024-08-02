import { Copc } from "copc";
import * as THREE from "three";

export class CopcLoader {
  constructor(url, options = {}) {
    this.url = url;
    this.options = {
      maxPointsPerNode: 500000,
      pointBudget: 5000000,
      minPointSize: 0.1,
      maxPointSize: 2.0,
      renderer: null,
      ...options,
    };
    this.copc = null;
    this.visibleNodes = new Map(); // Changed to Map for easier cleanup
    this.totalLoadedPoints = 0;
    this.loadQueue = [];
    this.isLoading = false;
    this.lastCameraPosition = null;
    this.lastFrustum = null;
    this.onPointCountUpdated = null;
  }

  async initialize() {
    try {
      console.log("Initializing COPC loader...");
      this.copc = await Copc.create(this.url);
      console.log("COPC created:", this.copc);
      return true;
    } catch (error) {
      console.error("Error initializing COPC loader:", error);
      return false;
    }
  }

  async loadNodes(cameraPosition) {
    if (this.isLoading) return;
    this.isLoading = true;

    console.log(`Starting loadNodes. Current total points: ${this.totalLoadedPoints}, Budget: ${this.options.pointBudget}`);

    while (this.loadQueue.length > 0 && this.totalLoadedPoints < this.options.pointBudget) {
      const { nodeKey, hierarchy } = this.loadQueue.shift();

      if (!this.visibleNodes.has(nodeKey) && hierarchy.pointCount > 0) {
        const pointsToLoad = Math.min(
            hierarchy.pointCount,
            this.options.pointBudget - this.totalLoadedPoints,
            this.options.maxPointsPerNode
        );

        if (pointsToLoad > 0) {
          console.log(`Attempting to load ${pointsToLoad} points for node ${nodeKey}`);
          const pointData = await this.loadAndRenderNode(nodeKey, hierarchy, pointsToLoad);

          if (pointData) {
            const points = this.createPointsObject(nodeKey, pointData);
            if (this.options.renderer && this.options.renderer.scene) {
              this.options.renderer.scene.add(points);
              this.visibleNodes.set(nodeKey, points);
              this.totalLoadedPoints += pointData.count;
              console.log(`Added ${pointData.count} points for node ${nodeKey}. Total points: ${this.totalLoadedPoints}`);
            } else {
              console.error("Renderer or scene is not available");
            }
            // Clear pointData from memory
            pointData.positions = null;
            pointData.colors = null;
          } else {
            console.log(`Failed to load points for node ${nodeKey}`);
          }
        }
      }
    }

    console.log(`Finished loadNodes. Final total points: ${this.totalLoadedPoints}`);
    this.updatePointCountDisplay();

    this.unloadDistantNodes(cameraPosition);
    this.isLoading = false;
  }

  async loadAndRenderNode(nodeKey, hierarchy, maxPoints) {
    try {
      const view = await Copc.loadPointDataView(this.url, this.copc, hierarchy);
      const totalPoints = Math.min(view.pointCount, maxPoints);

      const positions = new Float32Array(totalPoints * 3);
      const colors = new Float32Array(totalPoints * 3);

      const getX = view.getter("X");
      const getY = view.getter("Y");
      const getZ = view.getter("Z");
      const getRed = view.getter("Red");
      const getGreen = view.getter("Green");
      const getBlue = view.getter("Blue");

      for (let i = 0; i < totalPoints; i++) {
        positions[i * 3] = getX(i);
        positions[i * 3 + 1] = getY(i);
        positions[i * 3 + 2] = getZ(i);

        colors[i * 3] = getRed(i) / 65535;
        colors[i * 3 + 1] = getGreen(i) / 65535;
        colors[i * 3 + 2] = getBlue(i) / 65535;
      }

      const result = { positions, colors, count: totalPoints };

      return result;
    } catch (error) {
      console.error(`Error in loadAndRenderNode for node ${nodeKey}:`, error);
      return null;
    }
  }
  createPointsObject(nodeKey, pointData) {
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.Float32BufferAttribute(pointData.positions, 3));
    geometry.setAttribute("color", new THREE.Float32BufferAttribute(pointData.colors, 3));

    const material = new THREE.PointsMaterial({
      size: this.options.minPointSize,
      vertexColors: true,
      sizeAttenuation: true,
    });

    const points = new THREE.Points(geometry, material);
    points.name = nodeKey;

    geometry.computeBoundingSphere();

    return points;
  }

  async updateVisibleNodes(camera, frustum) {
    this.lastCameraPosition = camera.position.clone();
    this.lastFrustum = frustum.clone();
    this.loadQueue = [];

    const rootHierarchy = await Copc.loadHierarchyPage(this.url, this.copc.info.rootHierarchyPage);
    await this.traverseHierarchy(rootHierarchy, camera, frustum);

    this.loadNodes(camera.position);
    this.updateDynamicPointSize(camera);
  }

  async traverseHierarchy(hierarchyPage, camera, frustum) {
    for (const [nodeKey, hierarchy] of Object.entries(hierarchyPage.nodes)) {
      if (this.isNodeInFrustum(nodeKey, frustum)) {
        const distance = this.getNodeDistance(nodeKey, camera.position);
        this.loadQueue.push({ nodeKey, hierarchy, distance });

        if (hierarchy.pointCount === -1) {
          const childHierarchy = await Copc.loadHierarchyPage(this.url, { pageOffset: hierarchy.offset, pageLength: hierarchy.byteSize });
          await this.traverseHierarchy(childHierarchy, camera, frustum);
        }
      }
    }
    // Clear hierarchyPage from memory if no longer needed
    hierarchyPage = null;
  }

  isNodeInFrustum(nodeKey, frustum) {
    const [level, x, y, z] = nodeKey.split('-').map(Number);
    const nodeSize = this.copc.info.spacing * Math.pow(2, this.copc.info.maxDepth - level);
    const center = new THREE.Vector3(
        x * nodeSize + nodeSize / 2,
        y * nodeSize + nodeSize / 2,
        z * nodeSize + nodeSize / 2
    );
    const sphere = new THREE.Sphere(center, nodeSize * Math.sqrt(3) / 2);
    return frustum.intersectsSphere(sphere);
  }

  getNodeDistance(nodeKey, position) {
    const [level, x, y, z] = nodeKey.split('-').map(Number);
    const nodeSize = this.copc.info.spacing * Math.pow(2, this.copc.info.maxDepth - level);
    const center = new THREE.Vector3(
        x * nodeSize + nodeSize / 2,
        y * nodeSize + nodeSize / 2,
        z * nodeSize + nodeSize / 2
    );
    return center.distanceTo(position);
  }

  updateDynamicPointSize(camera) {
    if (this.options.renderer) {
      this.options.renderer.updatePointSizeDynamic();
    }
  }

  unloadDistantNodes(cameraPosition) {
    const nodesToUnload = [...this.visibleNodes.entries()].sort(([keyA, pointsA], [keyB, pointsB]) => {
      const distanceA = this.getNodeDistance(keyA, cameraPosition);
      const distanceB = this.getNodeDistance(keyB, cameraPosition);
      return distanceB - distanceA;
    });

    while (this.totalLoadedPoints > this.options.pointBudget && nodesToUnload.length > 0) {
      const [nodeKey, points] = nodesToUnload.pop();
      this.unloadNode(nodeKey, points);
    }
  }

  unloadNode(nodeKey, points) {
    if (this.options.renderer && this.options.renderer.scene) {
      this.options.renderer.scene.remove(points);
      points.geometry.dispose();
      points.material.dispose();
      this.visibleNodes.delete(nodeKey);
      this.totalLoadedPoints -= points.geometry.attributes.position.count;
    }
    this.updatePointCountDisplay();
  }

  updatePointCountDisplay() {
    if (this.onPointCountUpdated) {
      this.onPointCountUpdated(this.totalLoadedPoints);
    }
  }

  updatePointBudget(budget) {
    this.options.pointBudget = budget;
    console.log(`Point budget updated to ${budget}`);
    if (this.lastCameraPosition && this.lastFrustum) {
      this.updateVisibleNodes({ position: this.lastCameraPosition }, this.lastFrustum);
    }
  }

  dispose() {
    // Clear all loaded nodes
    for (const [nodeKey, points] of this.visibleNodes) {
      this.unloadNode(nodeKey, points);
    }
    this.visibleNodes.clear();

    // Clear other properties
    this.loadQueue = [];
    this.lastCameraPosition = null;
    this.lastFrustum = null;

    // Clear COPC data if possible
    if (this.copc && typeof this.copc.dispose === 'function') {
      this.copc.dispose();
    }
    this.copc = null;

    // Trigger garbage collection if available
    if (window.gc) {
      window.gc();
    }
  }
}