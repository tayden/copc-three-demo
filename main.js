import { CopcLoader } from "./lib/copc-loader.js";
import { Renderer } from "./lib/renderer.js";
import * as THREE from "three";
import * as dat from "dat.gui";

const url =
  "https://public-aco-data.s3.amazonaws.com/data/4012_PlaceGlacier/23_4012_08/23_4012_08_PlaceGlacier_LASER_WGS84_UTM10_Ellips.copc.laz";

let renderer, loader;
let guiParams;

async function main() {
  console.log("Starting main function");

  loader = new CopcLoader(url, {
    maxPointsPerNode: 500000,
    pointBudget: 5000000,
    minPointSize: 0.1,
    maxPointSize: 2.0,
  });

  if (await loader.initialize()) {
    console.log("Loader initialized successfully");

    renderer = new Renderer(loader.copc.info.cube, {
      minPointSize: loader.options.minPointSize,
      maxPointSize: loader.options.maxPointSize,
    });

    // Update the renderer in the loader's options
    loader.options.renderer = renderer;

    setupGUI(loader);
    updateScene();
    animate();
  } else {
    console.error("Failed to initialize COPC loader");
  }
}

function setupGUI(loader) {
  const gui = new dat.GUI();
  guiParams = {
    pointBudget: loader.options.pointBudget,
    minPointSize: loader.options.minPointSize,
    maxPointSize: loader.options.maxPointSize,
    edlStrength: 0.4,
    edlRadius: 1.0,
    loadedPoints: "0",
  };

  gui
    .add(guiParams, "pointBudget", 100000, 10000000)
    .step(100000)
    .onChange((value) => {
      console.log("Updating point budget to:", value);
      loader.updatePointBudget(value);
    });

  gui.add(guiParams, "minPointSize", 0.1, 2.0).onChange((value) => {
    console.log("Updating min point size to:", value);
    loader.options.minPointSize = value;
    renderer.updatePointSizeDynamic();
  });

  gui.add(guiParams, "maxPointSize", 0.1, 5.0).onChange((value) => {
    console.log("Updating max point size to:", value);
    loader.options.maxPointSize = value;
    renderer.updatePointSizeDynamic();
  });

  gui.add(guiParams, "edlStrength", 0, 2).onChange((value) => {
    console.log("Updating EDL strength to:", value);
    renderer.composer.passes[1].uniforms.edlStrength.value = value;
  });

  gui.add(guiParams, "edlRadius", 0.1, 2).onChange((value) => {
    console.log("Updating EDL radius to:", value);
    renderer.composer.passes[1].uniforms.radius.value = value;
  });

  gui.add(guiParams, "loadedPoints").name("Loaded Points").listen();

  gui
    .add({ forceUpdate: forceUpdateAndLog }, "forceUpdate")
    .name("Force Update and Log");

  // Set up the callback for updating the point count display
  loader.onPointCountUpdated = (count) => {
    guiParams.loadedPoints = count.toLocaleString();
  };
}

function forceUpdateAndLog() {
  console.log("Forcing update and logging scene contents");
  updateScene();
  logSceneContents();
}

function logSceneContents() {
  console.log("Scene contents:");
  renderer.scene.traverse((object) => {
    if (object instanceof THREE.Points) {
      console.log("- Points object:", object);
      console.log("  Geometry:", object.geometry);
      console.log("  Material:", object.material);
      console.log("  Position:", object.position);
      console.log(
        "  Number of points:",
        object.geometry.attributes.position.count,
      );
    }
  });
}

function updateScene() {
  const frustum = renderer.getCameraFrustum();
  loader.updateVisibleNodes(renderer.camera, frustum);
}

function animate() {
  requestAnimationFrame(animate);
  renderer.controls.update();
  updateScene();
  renderer.render();
}

console.log("Calling main function");
main();
