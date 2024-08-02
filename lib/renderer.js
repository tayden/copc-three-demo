import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';

export class Renderer {
    constructor(boundingBox, options) {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000000);
        this.renderer = new THREE.WebGLRenderer();
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.pointsObjects = new Map();
        this.octreeObject = null;
        this.options = options;

        this.setupScene(boundingBox);
    }

    setupScene(boundingBox) {
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);

        const center = new THREE.Vector3(
            (boundingBox.min[0] + boundingBox.max[0]) / 2,
            (boundingBox.min[1] + boundingBox.max[1]) / 2,
            (boundingBox.min[2] + boundingBox.max[2]) / 2
        );

        const size = new THREE.Vector3(
            boundingBox.max[0] - boundingBox.min[0],
            boundingBox.max[1] - boundingBox.min[1],
            boundingBox.max[2] - boundingBox.min[2]
        );

        const maxDim = Math.max(size.x, size.y, size.z);
        const fov = this.camera.fov * (Math.PI / 180);
        const cameraZ = Math.abs(maxDim / 2 / Math.tan(fov / 2)) * 1.5;

        this.camera.position.set(center.x, center.y, center.z + cameraZ);
        this.controls.target.copy(center);
        this.camera.lookAt(this.controls.target);
        this.controls.update();

        this.camera.near = maxDim * 0.00001;
        this.camera.far = maxDim * 10;
        this.camera.updateProjectionMatrix();

        window.addEventListener('resize', () => this.onWindowResize());
    }

    addPoints(nodeKey, pointData) {
        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.Float32BufferAttribute(pointData.positions, 3));
        geometry.setAttribute('color', new THREE.Float32BufferAttribute(pointData.colors, 3));

        const material = new THREE.PointsMaterial({
            size: this.options.pointSize,
            vertexColors: true,
            sizeAttenuation: false
        });

        const points = new THREE.Points(geometry, material);
        this.scene.add(points);
        this.pointsObjects.set(nodeKey, points);
    }

    removePoints(nodeKey) {
        const points = this.pointsObjects.get(nodeKey);
        if (points) {
            this.scene.remove(points);
            points.geometry.dispose();
            points.material.dispose();
            this.pointsObjects.delete(nodeKey);
        }
    }

    render() {
        this.renderer.render(this.scene, this.camera);
    }

    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    getCameraFrustum() {
        const frustum = new THREE.Frustum();
        const projScreenMatrix = new THREE.Matrix4();
        projScreenMatrix.multiplyMatrices(this.camera.projectionMatrix, this.camera.matrixWorldInverse);
        frustum.setFromProjectionMatrix(projScreenMatrix);
        return frustum;
    }

    updatePointSize(size) {
        this.pointsObjects.forEach(points => {
            points.material.size = size;
        });
    }

    visualizeOctree(octree) {
        if (this.octreeObject) {
            this.scene.remove(this.octreeObject);
        }

        this.octreeObject = new THREE.Group();

        const visualizeNode = (node) => {
            const box = new THREE.Box3(
                new THREE.Vector3(...node.box.min),
                new THREE.Vector3(...node.box.max)
            );
            const helper = new THREE.Box3Helper(box, 0x00ff00);
            this.octreeObject.add(helper);

            for (const child of node.children) {
                visualizeNode(child);
            }
        };

        visualizeNode(octree);
        this.scene.add(this.octreeObject);
    }

    removeOctreeVisualization() {
        if (this.octreeObject) {
            this.scene.remove(this.octreeObject);
            this.octreeObject = null;
        }
    }

}