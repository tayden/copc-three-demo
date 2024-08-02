import { Copc } from "copc";

export class NodeLoader {
  constructor(url, copc, nodesMetadata) {
    this.url = url;
    this.copc = copc;
    this.nodesMetadata = nodesMetadata;
  }

  async loadAndRenderNode(nodeKey, maxPoints) {
    const metadata = this.nodesMetadata[nodeKey];
    if (
      !metadata ||
      !metadata.hierarchy ||
      metadata.hierarchy.pointCount <= 0
    ) {
      return null;
    }

    try {
      const view = await Copc.loadPointDataView(
        this.url,
        this.copc,
        metadata.hierarchy,
      );
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

      return { positions, colors, count: totalPoints };
    } catch (error) {
      console.error(`Error in loadAndRenderNode for node ${nodeKey}:`, error);
      return null;
    }
  }

  async loadChildNodes(nodeKey) {
    const metadata = this.nodesMetadata[nodeKey];
    if (!metadata || metadata.childrenLoaded) return;

    try {
      const hierarchyData = await Copc.loadHierarchyPage(this.url, nodeKey);
      for (const [childKey, pointCount] of Object.entries(
        hierarchyData.nodes,
      )) {
        if (childKey === nodeKey) continue;
        this.nodesMetadata[childKey] = { pointCount, octreeNode: null };
      }
      metadata.childrenLoaded = true;
    } catch (error) {
      console.error(`Error loading child nodes for ${nodeKey}:`, error);
    }
  }
}
