import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import {Copc} from 'copc';
import * as dat from 'dat.gui';

// Custom Octree implementation
class Octree {
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
}

let scene, camera, renderer, controls;
const url = "https://public-aco-data.s3.amazonaws.com/data/4012_PlaceGlacier/23_4012_08/23_4012_08_PlaceGlacier_LASER_WGS84_UTM10_Ellips.copc.laz";

let copc;
let nodesMetadata = {};
let visibleNodes = new Set();
const frustum = new THREE.Frustum();
const projScreenMatrix = new THREE.Matrix4();
let copcOffset;
let copcScale;

let debugParams = {
    pointSize: 0.1,
    pointBudget: 1000000,
    showOctree: true,
};

let octreeVisualization;

let totalLoadedPoints = 0;
let octree;


async function init() {
    console.log("Initializing...");
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);
    camera.position.set(0, 0, 100);

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000);
    document.body.appendChild(renderer.domElement);

    controls = new OrbitControls(camera, renderer.domElement);
    controls.addEventListener('change', updateVisibleNodes);

    scene.add(new THREE.AxesHelper(50));

    try {
        console.log("Loading COPC data from URL:", url);
        copc = await Copc.create(url);
        console.log("COPC data loaded successfully:", copc);

        // Extract min values for offset
        copcOffset = new THREE.Vector3(
            copc.info.cube[0],
            copc.info.cube[1],
            copc.info.cube[2]
        );
        console.log("COPC offset (min values):", copcOffset);

        // Calculate scale based on the range of values
        const range = new THREE.Vector3(
            copc.info.cube[3] - copc.info.cube[0],
            copc.info.cube[4] - copc.info.cube[1],
            copc.info.cube[5] - copc.info.cube[2]
        );
        const maxRange = Math.max(range.x, range.y, range.z);
        copcScale = 100 / maxRange; // Scale to fit within a 100x100x100 cube
        console.log("COPC scale factor:", copcScale);

        console.log("Building octree...");
        octree = await buildOctree(copc.info.rootHierarchyPage);
        console.log("Octree built successfully:", octree);

        console.log("Logging octree structure:");
        logOctreeStructure(octree);

        console.log("Creating octree visualization...");
        createOctreeVisualization(octree);

        console.log("Setting camera to view point cloud...");
        setCameraToViewPointCloud();

        console.log("Creating debug axes...");
        createDebugAxes(100);

        console.log("Updating visible nodes...");
        await updateVisibleNodes();
    } catch (error) {
        console.error("Error loading COPC data:", error);
        alert("Failed to load COPC data. Check the console for details.");
    }

    setupDebugGUI();
    animate();
}

async function buildOctree(rootPage) {
    console.log("Building octree from root page:", rootPage);
    const [minX, minY, minZ, maxX, maxY, maxZ] = copc.info.cube;
    console.log("Bounding box:", {minX, minY, minZ, maxX, maxY, maxZ});

    const boundingBox = new THREE.Box3(
        new THREE.Vector3(minX, minY, minZ),
        new THREE.Vector3(maxX, maxY, maxZ)
    );
    console.log("Bounding box:", boundingBox);

    const octree = new Octree(boundingBox);

    // Load only the root node "0-0-0-0"
    const {nodes} = await Copc.loadHierarchyPage(url, rootPage);
    const rootKey = "0-0-0-0";
    const rootNode = nodes[rootKey];

    if (rootNode) {
        const box = await calculateNodeBounds(rootNode);
        const octreeNode = octree.addNode(box);
        octreeNode.nodeKey = rootKey;
        nodesMetadata[rootKey] = {node: rootNode, octreeNode};
        console.log(`Added root node ${rootKey} to octree: min=${box.min.toArray()}, max=${box.max.toArray()}`);
    } else {
        console.warn("Root node '0-0-0-0' not found in the hierarchy page");
    }

    console.log("Octree built with root node:", octree);
    return octree;
}

function createOctreeVisualization(octree) {
    octreeVisualization = new THREE.Group();

    function addBoxToVisualization(node) {
        const box = node.box;
        const size = new THREE.Vector3();
        box.getSize(size);

        const geometry = new THREE.BoxGeometry(size.x, size.y, size.z);
        const material = new THREE.LineBasicMaterial({
            color: 0x00ff00,
            transparent: true,
            opacity: 0.5
        });
        const wireframe = new THREE.LineSegments(new THREE.WireframeGeometry(geometry), material);

        const center = new THREE.Vector3();
        box.getCenter(center);
        wireframe.position.copy(center);

        octreeVisualization.add(wireframe);
        console.log(`Added octree box: center=${center.toArray()}, size=${size.toArray()}`);
    }

    octree.traverse(addBoxToVisualization);
    scene.add(octreeVisualization);
}

function updateOctreeVisibility() {
    if (octreeVisualization) {
        octreeVisualization.visible = debugParams.showOctree;
    }
}


async function loadHierarchyPageRecursive(pageNumber, parentOctreeNode) {
    console.log(`Loading hierarchy page ${pageNumber}`);
    try {
        const {nodes, children} = await Copc.loadHierarchyPage(url, pageNumber);
        console.log(`Page ${pageNumber} loaded:`, {
            nodeCount: Object.keys(nodes).length,
            childrenCount: children ? children.length : 0
        });

        for (const [key, node] of Object.entries(nodes)) {
            const box = await calculateNodeBounds(node);
            const octreeNode = parentOctreeNode.addNode(box);
            octreeNode.nodeKey = key;
            nodesMetadata[key] = {node, octreeNode};
            console.log(`Added node ${key} to octree: min=${box.min.toArray()}, max=${box.max.toArray()}`);
        }

        if (children && Array.isArray(children)) {
            for (const childPage of children) {
                await loadHierarchyPageRecursive(childPage, parentOctreeNode);
            }
        }
    } catch (error) {
        console.error(`Error loading hierarchy page ${pageNumber}:`, error);
    }
}

async function calculateNodeBounds(node) {
    try {
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

        return new THREE.Box3(
            new THREE.Vector3(minX, minY, minZ),
            new THREE.Vector3(maxX, maxY, maxZ)
        );
    } catch (error) {
        console.error(`Error calculating bounds for node:`, error);
        // Return a default box in case of error
        return new THREE.Box3(
            new THREE.Vector3(-1, -1, -1),
            new THREE.Vector3(1, 1, 1)
        );
    }
}


function unloadNode(nodeKey) {
    console.log(`Attempting to unload node ${nodeKey}`);
    const metadata = nodesMetadata[nodeKey];
    if (!metadata) {
        console.warn(`No metadata found for node ${nodeKey}`);
        return;
    }

    const {octreeNode} = metadata;
    if (!octreeNode) {
        console.warn(`No octree node found for node ${nodeKey}`);
        return;
    }

    if (octreeNode.points) {
        console.log(`Unloading points for node ${nodeKey}`);
        scene.remove(octreeNode.points);
        if (octreeNode.points.geometry) {
            octreeNode.points.geometry.dispose();
        }
        if (octreeNode.points.material) {
            octreeNode.points.material.dispose();
        }
        totalLoadedPoints -= octreeNode.points.geometry ? octreeNode.points.geometry.attributes.position.count : 0;
        octreeNode.points = null;
    } else {
        console.warn(`No points object found for node ${nodeKey}`);
    }

    visibleNodes.delete(nodeKey);
    console.log(`Node ${nodeKey} unloaded. Total loaded points: ${totalLoadedPoints}`);
}

async function loadAndRenderNode(nodeKey) {
    console.log(`Attempting to load and render node ${nodeKey}`);
    if (visibleNodes.has(nodeKey)) {
        console.log(`Node ${nodeKey} is already visible, skipping`);
        return;
    }

    const metadata = nodesMetadata[nodeKey];
    if (!metadata) {
        console.warn(`No metadata found for node ${nodeKey}`);
        return;
    }

    const {node, octreeNode} = metadata;
    if (!node) {
        console.warn(`Node ${nodeKey} not found in hierarchy`);
        return;
    }

    try {
        console.log(`Loading point data for node ${nodeKey}`);
        const view = await Copc.loadPointDataView(url, copc, node);
        console.log(`Point data loaded for node ${nodeKey}, point count:`, view.pointCount);

        const positions = new Float32Array(view.pointCount * 3);
        const colors = new Float32Array(view.pointCount * 3);

        const getters = ['X', 'Y', 'Z', 'Red', 'Green', 'Blue'].map(view.getter);

        for (let i = 0; i < view.pointCount; i++) {
            let [x, y, z, r, g, b] = getters.map(getter => getter(i));

            positions[i * 3] = x;
            positions[i * 3 + 1] = y;
            positions[i * 3 + 2] = z;

            if (i < 10) {
                console.log(`Point ${i}: x=${x}, y=${y}, z=${z}, r=${r}, g=${g}, b=${b}`);
            }

            colors[i * 3] = r / 65535;
            colors[i * 3 + 1] = g / 65535;
            colors[i * 3 + 2] = b / 65535;
        }

        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        const material = new THREE.PointsMaterial({
            size: debugParams.pointSize,
            vertexColors: true,
            sizeAttenuation: false
        });

        const points = new THREE.Points(geometry, material);
        octreeNode.points = points;
        scene.add(points);

        visibleNodes.add(nodeKey);
        totalLoadedPoints += view.pointCount;

        console.log(`Node ${nodeKey} rendered with ${view.pointCount} points`);
    } catch (error) {
        console.error(`Error loading node ${nodeKey}:`, error);
    }
}

async function updateVisibleNodes() {
    console.log("Updating visible nodes...");
    camera.updateMatrixWorld();
    projScreenMatrix.multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse);
    frustum.setFromProjectionMatrix(projScreenMatrix);

    const nodesToLoad = [];
    const nodesToUnload = new Set(visibleNodes);

    let totalNodes = 0;
    let intersectingNodes = 0;

    octree.traverse((octreeNode) => {
        totalNodes++;
        if (frustum.intersectsBox(octreeNode.box)) {
            intersectingNodes++;
            if (octreeNode.nodeKey) {
                nodesToUnload.delete(octreeNode.nodeKey);
                if (!visibleNodes.has(octreeNode.nodeKey)) {
                    nodesToLoad.push(octreeNode.nodeKey);
                }
            }
        }
    });

    console.log(`Total nodes in octree: ${totalNodes}`);
    console.log(`Nodes intersecting frustum: ${intersectingNodes}`);
    console.log(`Nodes to unload: ${nodesToUnload.size}, Nodes to load: ${nodesToLoad.length}`);

    // Unload nodes that are no longer visible
    for (const nodeKey of nodesToUnload) {
        unloadNode(nodeKey);
    }

    // Load new visible nodes
    for (const nodeKey of nodesToLoad) {
        if (totalLoadedPoints < debugParams.pointBudget) {
            await loadAndRenderNode(nodeKey);
        } else {
            console.log(`Point budget reached, stopping at ${totalLoadedPoints} points`);
            break;
        }
    }

    console.log(`Total loaded points: ${totalLoadedPoints}`);
    console.log("Camera position:", camera.position);
    console.log("Camera lookAt:", controls.target);
}


function setCameraToViewPointCloud() {
    const boundingBox = octree.box;
    const center = new THREE.Vector3();
    boundingBox.getCenter(center);
    const size = new THREE.Vector3();
    boundingBox.getSize(size);

    const maxDim = Math.max(size.x, size.y, size.z);
    const fov = camera.fov * (Math.PI / 180);
    const cameraZ = Math.abs(maxDim / 2 / Math.tan(fov / 2)) * 1.5;

    camera.position.set(center.x, center.y, center.z + cameraZ);
    controls.target.copy(center);
    camera.lookAt(controls.target);
    controls.update();

    camera.near = maxDim * 0.00001;
    camera.far = maxDim * 10;
    camera.updateProjectionMatrix();

    console.log("Bounding box center:", center);
    console.log("Bounding box size:", size);
    console.log("Camera set to:", camera.position);
    console.log("Camera looking at:", controls.target);
    console.log("Camera near plane:", camera.near);
    console.log("Camera far plane:", camera.far);

    // Add a debug sphere at the camera's target
    const debugSphere = new THREE.Mesh(
        new THREE.SphereGeometry(maxDim * 0.01, 32, 32),
        new THREE.MeshBasicMaterial({color: 0x00ff00})
    );
    debugSphere.position.copy(controls.target);
    scene.add(debugSphere);
}

function createDebugAxes(size) {
    const axes = new THREE.AxesHelper(size);
    scene.add(axes);
}


function debugNode(nodeKey) {
    const metadata = nodesMetadata[nodeKey];
    if (!metadata) {
        console.warn(`No metadata found for node ${nodeKey}`);
        return;
    }

    const {node, octreeNode} = metadata;
    console.log(`Debug info for node ${nodeKey}:`);
    console.log("Node:", node);
    console.log("Octree node:", octreeNode);
    console.log("Bounding box:", octreeNode.box);
    console.log("Is visible:", visibleNodes.has(nodeKey));
    console.log("Intersects frustum:", frustum.intersectsBox(octreeNode.box));
}

function logOctreeStructure(octree, depth = 0) {
    const indent = '  '.repeat(depth);
    console.log(`${indent}Node: ${octree.nodeKey || 'root'}`);
    console.log(`${indent}Box: min=${octree.box.min.toArray()}, max=${octree.box.max.toArray()}`);
    console.log(`${indent}Children: ${octree.children.length}`);
    for (const child of octree.children) {
        logOctreeStructure(child, depth + 1);
    }
}


function setupDebugGUI() {
    const gui = new dat.GUI();
    gui.add(debugParams, 'pointSize', 0.001, 0.1).onChange((value) => {
        scene.traverse((object) => {
            if (object instanceof THREE.Points) {
                object.material.size = value;
            }
        });
    });
    gui.add(debugParams, 'pointBudget', 100000, 10000000).step(100000).onChange(updateVisibleNodes);
    gui.add(debugParams, 'showOctree').onChange(updateOctreeVisibility);
    gui.add({togglePoints: togglePointVisibility}, 'togglePoints').name('Toggle Points');
}

function togglePointVisibility() {
    scene.traverse((object) => {
        if (object instanceof THREE.Points) {
            object.visible = !object.visible;
        }
    });
    console.log("Toggled point visibility");
}


function animate() {
    requestAnimationFrame(animate);
    controls.update();
    // updateVisibleNodes();

    // Log camera position and lookAt every 100 frames
    if (animate.frameCount % 100 === 0) {
        console.log("Camera position:", camera.position);
        console.log("Camera lookAt:", controls.target);
    }
    animate.frameCount = (animate.frameCount || 0) + 1;

    renderer.render(scene, camera);
}

console.log("Script loaded, calling init()");
init();

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});