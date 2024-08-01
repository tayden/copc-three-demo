import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import {Copc} from 'copc';
import * as dat from 'dat.gui';

let scene, camera, renderer, controls;
let pointCloud;
const url = "https://public-aco-data.s3.amazonaws.com/data/4012_PlaceGlacier/22_4012_03/22_4012_03_LASER_WGS84_UTM10_Ellips.copc.laz";
// const url = "/mnt/aco-uvic/Taylor_temp/geoconnections_data/4012_PlaceGlacier/23_4012_11/23_4012_11_PlaceGlacier_LASER_WGS84_UTM10_Ellips.copc.laz";
let copc;
let nodes = {};
let loadedNodes = new Set();
const frustum = new THREE.Frustum();
const projScreenMatrix = new THREE.Matrix4();

// Debug variables
let debugObjects = {};
let gui;
let debugParams = {
    showBoundingBoxes: false,
    pointSize: 0.01,
    loadDistance: 1000,
    pointBudget: 100000,
};

let totalLoadedPoints = 0;

async function init() {
    console.log("Initializing...");
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);

    // We'll set the camera position later, after loading the point cloud

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000);
    document.body.appendChild(renderer.domElement);

    controls = new OrbitControls(camera, renderer.domElement);
    controls.addEventListener('change', () => {
        updateVisibleNodes().catch(console.error);
    });

    const axesHelper = new THREE.AxesHelper(50);
    scene.add(axesHelper);

    const gridHelper = new THREE.GridHelper(1000, 100);
    scene.add(gridHelper);

    console.log("Loading COPC data...");
    try {
        copc = await Copc.create(url);
        const {nodes: initialNodes} = await Copc.loadHierarchyPage(url, copc.info.rootHierarchyPage);
        nodes = initialNodes;
        console.log("COPC data loaded:", nodes);

        // Load root node
        await loadAndRenderNode('0-0-0-0');

        // After loading the root node, set the camera to view the point cloud
        setCameraToViewPointCloud();
    } catch (error) {
        console.error("Error loading COPC data:", error);
        alert("Failed to load COPC data. Check the console for details.");
    }

    setupDebugGUI();
    animate();
}

function setCameraToViewPointCloud() {
    const rootNode = scene.getObjectByName('0-0-0-0');
    if (rootNode && rootNode.geometry) {
        rootNode.geometry.computeBoundingBox();
        const box = rootNode.geometry.boundingBox;

        const center = new THREE.Vector3();
        box.getCenter(center);

        const size = new THREE.Vector3();
        box.getSize(size);

        const maxDim = Math.max(size.x, size.y, size.z);
        const fov = camera.fov * (Math.PI / 180);
        const cameraZ = Math.abs(maxDim / 2 / Math.tan(fov / 2)) * 1.5; // 1.5 times the distance to fit the whole point cloud

        camera.position.set(center.x, center.y, center.z + cameraZ);
        camera.lookAt(center);
        controls.target.copy(center);
        controls.update();

        console.log("Camera positioned to view point cloud");
    } else {
        console.warn("Root node not found or has no geometry. Using default camera position.");
        camera.position.set(100, 100, 100);
        camera.lookAt(scene.position);
    }
}


async function loadAndRenderNode(nodeKey) {
    if (loadedNodes.has(nodeKey)) return;

    console.log(`Loading node: ${nodeKey}`);
    const node = nodes[nodeKey];
    console.log("Node", node)
    const view = await Copc.loadPointDataView(url, copc, node);
    console.log("View", view);

    if (totalLoadedPoints + view.pointCount > debugParams.pointBudget) {
        console.log(`Skipping node ${nodeKey} to stay within point budget`);
        return;
    }

    const positions = new Float32Array(view.pointCount * 3);
    const colors = new Float32Array(view.pointCount * 3);

    const getX = view.getter('X');
    const getY = view.getter('Y');
    const getZ = view.getter('Z');
    const getIntensity = view.getter('Intensity');

    let minX = Infinity, minY = Infinity, minZ = Infinity;
    let maxX = -Infinity, maxY = -Infinity, maxZ = -Infinity;
    for (let i = 0; i < view.pointCount; i++) {
        const x = getX(i);
        const y = getY(i);
        const z = getZ(i);
        positions[i * 3] = x;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = z;

        minX = Math.min(minX, x);
        minY = Math.min(minY, y);
        minZ = Math.min(minZ, z);
        maxX = Math.max(maxX, x);
        maxY = Math.max(maxY, y);
        maxZ = Math.max(maxZ, z);

        const intensity = getIntensity(i) / 65535;
        colors[i * 3] = colors[i * 3 + 1] = colors[i * 3 + 2] = intensity;
    }
    console.log("Positions", positions)
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
        size: debugParams.pointSize,
        vertexColors: true
    });
    const points = new THREE.Points(geometry, material);
    console.log(points)
    points.name = nodeKey;

    scene.add(points);
    console.log("Points added to scene")
    loadedNodes.add(nodeKey);
    totalLoadedPoints += view.pointCount;
    console.log("Loaded nodes updated")

    // Add bounding box
    console.log("Adding bounding box");
    const box = new THREE.Box3(
        new THREE.Vector3(minX, minY, minZ),
        new THREE.Vector3(maxX, maxY, maxZ)
    );
    console.log("Box", box);
    const boxHelper = new THREE.Box3Helper(box, 0xffff00);
    boxHelper.name = `bbox_${nodeKey}`;
    boxHelper.visible = debugParams.showBoundingBoxes;
    console.log("Box Helper", boxHelper);
    scene.add(boxHelper);

    console.log(`Node ${nodeKey} loaded with ${view.pointCount} points`);
}

function unloadNode(nodeKey) {
    console.log(`Unloading node: ${nodeKey}`);
    const object = scene.getObjectByName(nodeKey);
    if (object) {
        totalLoadedPoints -= object.geometry.attributes.position.count; // New: Update total loaded points
        scene.remove(object);
        object.geometry.dispose();
        object.material.dispose();
    }
    const boxHelper = scene.getObjectByName(`bbox_${nodeKey}`);
    if (boxHelper) {
        scene.remove(boxHelper);
    }
    loadedNodes.delete(nodeKey);
}


async function updateVisibleNodes() {
    camera.updateMatrixWorld();
    projScreenMatrix.multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse);
    frustum.setFromProjectionMatrix(projScreenMatrix);

    const visibleNodes = new Set();
    const nodesToLoad = new Set();
    const nodesToUnload = new Set(loadedNodes);

    for (const nodeKey in nodes) {
        const node = nodes[nodeKey];

        // Calculate bounding box for the node
        let box;
        if (loadedNodes.has(nodeKey)) {
            const points = scene.getObjectByName(nodeKey);
            if (points && points.geometry) {
                points.geometry.computeBoundingBox();
                box = points.geometry.boundingBox.clone();
            }
        } else {
            // If the node isn't loaded, we need to load its data to calculate the bounding box
            const view = await Copc.loadPointDataView(url, copc, node);
            const getX = view.getter('X');
            const getY = view.getter('Y');
            const getZ = view.getter('Z');

            let minX = Infinity, minY = Infinity, minZ = Infinity;
            let maxX = -Infinity, maxY = -Infinity, maxZ = -Infinity;

            for (let i = 0; i < view.pointCount; i++) {
                const x = getX(i);
                const y = getY(i);
                const z = getZ(i);

                minX = Math.min(minX, x);
                minY = Math.min(minY, y);
                minZ = Math.min(minZ, z);
                maxX = Math.max(maxX, x);
                maxY = Math.max(maxY, y);
                maxZ = Math.max(maxZ, z);
            }

            box = new THREE.Box3(
                new THREE.Vector3(minX, minY, minZ),
                new THREE.Vector3(maxX, maxY, maxZ)
            );
        }

        if (box && frustum.intersectsBox(box)) {
            visibleNodes.add(nodeKey);
            nodesToUnload.delete(nodeKey);

            const distance = camera.position.distanceTo(box.getCenter(new THREE.Vector3()));
            const screenSize = getScreenSize(box, camera);

            if (screenSize > 100 && node.children && node.children.length > 0 && distance < debugParams.loadDistance) {
                node.children.forEach(childKey => nodesToLoad.add(childKey));
            } else if (!loadedNodes.has(nodeKey) && distance < debugParams.loadDistance) {
                nodesToLoad.add(nodeKey);
            }
        }
    }

    console.log(`Visible nodes: ${visibleNodes.size}, To load: ${nodesToLoad.size}, To unload: ${nodesToUnload.size}`);

    for (const nodeKey of nodesToLoad) {
        if (totalLoadedPoints < debugParams.pointBudget) {
            await loadAndRenderNode(nodeKey);
        } else {
            break; // Stop loading new nodes if we've reached the point budget
        }
    }
    nodesToUnload.forEach(nodeKey => unloadNode(nodeKey));
}

function getScreenSize(box, camera) {
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());
    const distance = camera.position.distanceTo(center);
    const fov = camera.fov * Math.PI / 180;
    const height = 2 * Math.tan(fov / 2) * distance;
    return (size.length() / height) * window.innerHeight;
}

async function animate() {
    requestAnimationFrame(animate);
    controls.update();
    await updateVisibleNodes();
    renderer.render(scene, camera);

    // Update debug info
    debugObjects.cameraInfo.innerHTML = `
        Camera Position: ${camera.position.x.toFixed(2)}, ${camera.position.y.toFixed(2)}, ${camera.position.z.toFixed(2)}
        Camera Look At: ${controls.target.x.toFixed(2)}, ${controls.target.y.toFixed(2)}, ${controls.target.z.toFixed(2)}
        Loaded Nodes: ${loadedNodes.size}
    `;
}


function setupDebugGUI() {
    gui = new dat.GUI();
    gui.add(debugParams, 'showBoundingBoxes').onChange(value => {
        scene.traverse(object => {
            if (object.name.startsWith('bbox_')) {
                object.visible = value;
            }
        });
    });
    gui.add(debugParams, 'pointSize', 0.001, 0.1).onChange(value => {
        scene.traverse(object => {
            if (object instanceof THREE.Points) {
                object.material.size = value;
            }
        });
    });
    gui.add(debugParams, 'loadDistance', 100, 10000);
    gui.add(debugParams, 'pointBudget', 10000, 1000000).step(10000).onChange(value => {
        console.log(`Point budget changed to ${value}`);
        updateVisibleNodes(); // Trigger an update when the point budget changes
    });
    // Add camera position controls
    const cameraFolder = gui.addFolder('Camera');
    cameraFolder.add(camera.position, 'x', -1000, 1000);
    cameraFolder.add(camera.position, 'y', -1000, 1000);
    cameraFolder.add(camera.position, 'z', -1000, 1000);

    // Add a button to reset the camera
    gui.add({
        resetCamera: function () {
            camera.position.set(100, 100, 100);
            camera.lookAt(scene.position);
            controls.target.set(0, 0, 0);
            controls.update();
        }
    }, 'resetCamera').name('Reset Camera');

    // Add debug info div
    const debugInfo = document.createElement('div');
    debugInfo.style.position = 'absolute';
    debugInfo.style.top = '10px';
    debugInfo.style.left = '10px';
    debugInfo.style.color = 'white';
    debugInfo.style.backgroundColor = 'rgba(0,0,0,0.5)';
    debugInfo.style.padding = '10px';
    debugInfo.style.fontFamily = 'monospace';
    debugInfo.style.fontSize = '12px';
    debugInfo.style.pointerEvents = 'none';
    console.log("Created debug info div")
    document.body.appendChild(debugInfo);
    debugObjects.cameraInfo = debugInfo;

    debugObjects.cameraInfo.innerHTML = `
        Camera Position: ${camera.position.x.toFixed(2)}, ${camera.position.y.toFixed(2)}, ${camera.position.z.toFixed(2)}
        Camera Look At: ${controls.target.x.toFixed(2)}, ${controls.target.y.toFixed(2)}, ${controls.target.z.toFixed(2)}
        Loaded Nodes: ${loadedNodes.size}
        Total Points: ${totalLoadedPoints} / ${debugParams.pointBudget}
    `;
}

init();

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});