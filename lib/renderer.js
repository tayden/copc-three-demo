import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";

export class Renderer {
  constructor(boundingBox, options) {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000000,
    );
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.pointsObjects = new Map();
    this.octreeObject = null;
    this.options = options;

    this.setupScene(boundingBox);
    this.setupEDL();
  }

  setupScene(boundingBox) {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderer.domElement);

    const center = new THREE.Vector3(
      (boundingBox[0] + boundingBox[3]) / 2,
      (boundingBox[1] + boundingBox[4]) / 2,
      (boundingBox[2] + boundingBox[5]) / 2,
    );

    const size = new THREE.Vector3(
      boundingBox[3] - boundingBox[0],
      boundingBox[4] - boundingBox[1],
      boundingBox[5] - boundingBox[2],
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

    window.addEventListener("resize", () => this.onWindowResize());
  }

  setupEDL() {
    this.composer = new EffectComposer(this.renderer);
    this.composer.addPass(new RenderPass(this.scene, this.camera));

    const edlPass = new ShaderPass({
      uniforms: {
        tDiffuse: { value: null },
        screenWidth: { value: window.innerWidth },
        screenHeight: { value: window.innerHeight },
        edlStrength: { value: 0.4 },
        radius: { value: 1.0 },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D tDiffuse;
        uniform float screenWidth;
        uniform float screenHeight;
        uniform float edlStrength;
        uniform float radius;
        varying vec2 vUv;

        float getDepth(int x, int y) {
          return texture2D(tDiffuse, vUv + vec2(x, y) / vec2(screenWidth, screenHeight)).a;
        }

        void main() {
          float depth = getDepth(0, 0);
          float edl = 0.0;
          
          for (int i = -1; i <= 1; i++) {
            for (int j = -1; j <= 1; j++) {
              if (i != 0 || j != 0) {
                float neighborDepth = getDepth(i, j);
                float diff = depth - neighborDepth;
                edl += max(0.0, diff);
              }
            }
          }

          edl = 1.0 - edlStrength * edl;
          vec4 color = texture2D(tDiffuse, vUv);
          gl_FragColor = vec4(color.rgb * edl, color.a);
        }
      `,
    });

    this.composer.addPass(edlPass);
  }

  addPoints(nodeKey, pointData) {
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
      size: this.options.pointSize,
      vertexColors: true,
      sizeAttenuation: false,
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
    this.composer.render();
  }

  onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.composer.setSize(window.innerWidth, window.innerHeight);

    // Update EDL pass uniforms
    const edlPass = this.composer.passes[1];
    edlPass.uniforms.screenWidth.value = window.innerWidth;
    edlPass.uniforms.screenHeight.value = window.innerHeight;
  }

  getCameraFrustum() {
    const frustum = new THREE.Frustum();
    const projScreenMatrix = new THREE.Matrix4();
    projScreenMatrix.multiplyMatrices(
      this.camera.projectionMatrix,
      this.camera.matrixWorldInverse,
    );
    frustum.setFromProjectionMatrix(projScreenMatrix);
    return frustum;
  }

  updatePointSize(size) {
    this.pointsObjects.forEach((points) => {
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
        new THREE.Vector3(...node.box.max),
      );
      const helper = new THREE.Box3Helper(box, 0x00ff00);
      this.octreeObject.add(helper);

      for (let i = 0; i < node.getChildCount(); i++) {
        const child = node.getChild(i);
        if (child) {
          visualizeNode(child);
        }
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

  updatePointSizeDynamic() {
    const fov = this.camera.fov * (Math.PI / 180);
    const viewHeight =
      2 *
      Math.tan(fov / 2) *
      this.camera.position.distanceTo(this.controls.target);
    const screenHeight = window.innerHeight;

    this.pointsObjects.forEach((points) => {
      const boundingSphere = points.geometry.boundingSphere;
      if (boundingSphere) {
        const projectedSize =
          (screenHeight * boundingSphere.radius) / viewHeight;
        const size = Math.max(
          this.options.minPointSize,
          Math.min(this.options.maxPointSize, projectedSize),
        );
        points.material.size = size;
      }
    });
  }
}
