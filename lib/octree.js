export class Octree {
    constructor(box) {
        this.box = box;
        this.children = [];
        this.nodeKey = null;
        this.points = null;
    }

    addNode(box) {
        const child = new Octree(box);
        this.children.push(child);
        return child;
    }

    traverse(callback) {
        callback(this);
        for (const child of this.children) {
            child.traverse(callback);
        }
    }

    getCenter() {
        return [
            (this.box.min[0] + this.box.max[0]) / 2,
            (this.box.min[1] + this.box.max[1]) / 2,
            (this.box.min[2] + this.box.max[2]) / 2
        ];
    }
}