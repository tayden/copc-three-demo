import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import {Copc} from 'copc';
import * as dat from 'dat.gui';

const MAX_POINTS_PER_NODE = 100000;


let scene, camera, renderer, controls;
const url = "https://public-aco-data.s3.amazonaws.com/data/4012_PlaceGlacier/23_4012_08/23_4012_08_PlaceGlacier_LASER_WGS84_UTM10_Ellips.copc.laz";

let copc;
let nodesMetadata = {};
let visibleNodes = new Set();
const frustum = new THREE.Frustum();
const projScreenMatrix = new THREE.Matrix4();

let debugParams = {
    pointSize: 0.1,
    pointBudget: 1000000,
    showOctree: true,
};

let octreeVisualization;

let totalLoadedPoints = 0;
let octree;
let loadQueue = [];
let isLoading = false;

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

async function buildOctree(rootPage) {
    const [minX, minY, minZ, maxX, maxY, maxZ] = copc.info.cube;
    const boundingBox = new THREE.Box3(
        new THREE.Vector3(minX, minY, minZ),
        new THREE.Vector3(maxX, maxY, maxZ)
    );

    const octree = new Octree(boundingBox);
    octree.nodeKey = "0-0-0-0";  // Set the root node key

    try {
        console.log("Starting to load root hierarchy page");
        const hierarchyData = await Copc.loadHierarchyPage(url, rootPage);
        console.log("Root hierarchy data loaded:", hierarchyData);


        for (const [nodeKey, nodeData] of Object.entries(hierarchyData.nodes)) {
            const [level, x, y, z] = nodeKey.split('-').map(Number);
            const box = calculateNodeBounds({level, x, y, z}, boundingBox);
            let octreeNode;

            if (nodeKey === "0-0-0-0") {
                octreeNode = octree;
            } else {
                octreeNode = octree.addNode(box);
            }

            octreeNode.nodeKey = nodeKey;
            nodesMetadata[nodeKey] = {hierarchy: nodeData, octreeNode};
        }
    } catch (error) {
        console.error("Error loading root hierarchy:", error);
    }


    console.log("Built octree:", octree);
    console.log("Nodes metadata:", nodesMetadata);

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

async function init() {
    console.log("Initializing...");
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000000);
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

        controls.addEventListener('change', () => {
            requestAnimationFrame(updateVisibleNodes);
        });

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
        createDebugAxes(1000);

        console.log("Updating visible nodes...");
        await updateVisibleNodes();

        console.log("Octree built successfully:", octree);
        console.log("Nodes metadata:", nodesMetadata);

        // Force an initial render
        renderer.render(scene, camera);
    } catch (error) {
        console.error("Error loading COPC data:", error);
        alert("Failed to load COPC data. Check the console for details.");
    }

    setupDebugGUI();
    animate();
}






async function loadChildNodes(nodeKey) {
    const metadata = nodesMetadata[nodeKey];
    if (!metadata || metadata.childrenLoaded) return;

    try {
        const hierarchyData = await Copc.loadHierarchyPage(url, nodeKey);
        console.log(`Child hierarchy data for ${nodeKey}:`, hierarchyData);

        for (const [childKey, pointCount] of Object.entries(hierarchyData.nodes)) {
            if (childKey === nodeKey) continue; // Skip the parent node

            const [level, x, y, z] = childKey.split('-').map(Number);
            const box = calculateNodeBounds({level, x, y, z}, metadata.octreeNode.box);
            const octreeNode = metadata.octreeNode.addNode(box);
            octreeNode.nodeKey = childKey;
            nodesMetadata[childKey] = {pointCount, octreeNode};
        }

        metadata.childrenLoaded = true;
    } catch (error) {
        console.error(`Error loading child nodes for ${nodeKey}:`, error);
    }
}


function calculateNodeBounds(key, parentBounds) {
    const {level, x, y, z} = key;
    const size = parentBounds.getSize(new THREE.Vector3());
    const halfSize = size.multiplyScalar(0.5);
    const center = parentBounds.getCenter(new THREE.Vector3());

    center.x += halfSize.x * (x % 2 ? 0.5 : -0.5);
    center.y += halfSize.y * (y % 2 ? 0.5 : -0.5);
    center.z += halfSize.z * (z % 2 ? 0.5 : -0.5);

    return new THREE.Box3().setFromCenterAndSize(center, halfSize);
}


function unloadNode(nodeKey) {
    const metadata = nodesMetadata[nodeKey];
    if (!metadata) return;

    const {octreeNode} = metadata;
    if (octreeNode.points) {
        scene.remove(octreeNode.points);
        const pointCount = octreeNode.points.geometry.attributes.position.count;
        octreeNode.points.geometry.dispose();
        octreeNode.points.material.dispose();
        totalLoadedPoints -= pointCount;
        octreeNode.points = null;
    }

    visibleNodes.delete(nodeKey);
    console.log(`Unloaded node ${nodeKey}. Total points remaining: ${totalLoadedPoints}`);
}

async function loadAndRenderNode(nodeKey, maxPoints) {
    console.log(`Attempting to load and render node ${nodeKey}`);
    const metadata = nodesMetadata[nodeKey];
    if (!metadata) {
        console.warn(`No metadata found for node ${nodeKey}`);
        return;
    }

    const {hierarchy, octreeNode} = metadata;
    console.log(`Node ${nodeKey} metadata:`, metadata);

    if (!hierarchy || hierarchy.pointCount <= 0) {
        console.warn(`Node ${nodeKey} has no points`);
        return;
    }

    try {
        console.log(`Starting to load point data for node ${nodeKey}`);
        let view = await Copc.loadPointDataView(url, copc, hierarchy);
        console.log(`Point data loaded for node ${nodeKey}, point count:`, view.pointCount);

        const totalPoints = Math.min(view.pointCount, maxPoints);
        console.log(`Preparing to render ${totalPoints} points for node ${nodeKey}`);

        const positions = new Float32Array(totalPoints * 3);
        const colors = new Float32Array(totalPoints * 3);

        const getX = view.getter('X');
        const getY = view.getter('Y');
        const getZ = view.getter('Z');
        const getRed = view.getter('Red');
        const getGreen = view.getter('Green');
        const getBlue = view.getter('Blue');

        for (let i = 0; i < totalPoints; i++) {
            positions[i * 3] = getX(i);
            positions[i * 3 + 1] = getY(i);
            positions[i * 3 + 2] = getZ(i);

            colors[i * 3] = getRed(i) / 65535;
            colors[i * 3 + 1] = getGreen(i) / 65535;
            colors[i * 3 + 2] = getBlue(i) / 65535;
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
        scene.add(points);

        octreeNode.points = points;
        visibleNodes.add(nodeKey);
        totalLoadedPoints += totalPoints;

        console.log(`Node ${nodeKey} rendered with ${totalPoints} points. Total in scene: ${totalLoadedPoints}`);

        // Force a render to show the updated points
        renderer.render(scene, camera);

    } catch (error) {
        console.error(`Error in loadAndRenderNode for node ${nodeKey}:`, error);
    }
}

function updateVisibleNodes() {
    camera.updateMatrixWorld();
    projScreenMatrix.multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse);
    frustum.setFromProjectionMatrix(projScreenMatrix);

    loadQueue = [];
    traverseOctree(octree, 0);

    console.log(`updateVisibleNodes: loadQueue length ${loadQueue.length}`);
    console.log(`Total loaded points before loading: ${totalLoadedPoints}`);

    if (!isLoading) {
        isLoading = true;
        loadNextNode().then(() => {
            isLoading = false;
            console.log(`Total loaded points after loading: ${totalLoadedPoints}`);
        });
    }
}


async function traverseOctree(node, depth) {
    console.log(`Traversing node at depth ${depth}, nodeKey: ${node.nodeKey}`);

    if (frustum.intersectsBox(node.box)) {
        console.log(`Node ${node.nodeKey} intersects frustum`);
        const metadata = nodesMetadata[node.nodeKey];
        if (metadata && metadata.hierarchy.pointCount) {
            const pointCount = metadata.hierarchy.pointCount;
            const distance = camera.position.distanceTo(node.box.getCenter(new THREE.Vector3()));
            const screenSize = getScreenSize(node.box, camera);

            console.log(`Node ${node.nodeKey}: pointCount=${pointCount}, screenSize=${screenSize}`);

            if (screenSize > 10 || depth === 0) {
                if (pointCount > 0 && !visibleNodes.has(node.nodeKey)) {
                    console.log(`Adding node ${node.nodeKey} to loadQueue`);
                    loadQueue.push({node, distance, depth});
                }

                await loadChildNodes(node.nodeKey);

                for (const child of node.children) {
                    await traverseOctree(child, depth + 1);
                }
            } else if (pointCount > 0 && !visibleNodes.has(node.nodeKey)) {
                console.log(`Adding leaf node ${node.nodeKey} to loadQueue`);
                loadQueue.push({node, distance, depth});
            }
        } else {
            console.log(`No metadata or point count found for node ${node.nodeKey}`);
        }
    } else {
        console.log(`Node ${node.nodeKey} does not intersect frustum`);
    }
}


function getScreenSize(box, camera) {
    const size = new THREE.Vector3();
    box.getSize(size);
    const center = new THREE.Vector3();
    box.getCenter(center);

    const distance = camera.position.distanceTo(center);
    const fov = camera.fov * Math.PI / 180;
    const height = 2 * Math.tan(fov / 2) * distance;
    const width = height * camera.aspect;

    return Math.max(size.x / width, size.y / height) * window.innerHeight;
}

async function loadNextNode() {
    console.log(`loadNextNode called. Queue length: ${loadQueue.length}, Total loaded points: ${totalLoadedPoints}`);
    while (loadQueue.length > 0 && totalLoadedPoints < debugParams.pointBudget) {
        const {node} = loadQueue.shift();
        console.log(`Processing node ${node.nodeKey}`);

        if (!visibleNodes.has(node.nodeKey)) {
            const metadata = nodesMetadata[node.nodeKey];
            if (metadata && metadata.hierarchy.pointCount) {
                const pointsToLoad = Math.min(
                    metadata.hierarchy.pointCount,
                    debugParams.pointBudget - totalLoadedPoints,
                    MAX_POINTS_PER_NODE
                );
                if (pointsToLoad > 0) {
                    await loadAndRenderNode(node.nodeKey, pointsToLoad);
                } else {
                    break;  // Stop loading if we've reached or exceeded the point budget
                }
            }
        } else {
            console.log(`Node ${node.nodeKey} already visible, skipping`);
        }

        // Unload distant nodes if we're over the point budget
        while (totalLoadedPoints > debugParams.pointBudget) {
            const nodesToUnload = [...visibleNodes].sort((a, b) => {
                const distanceA = camera.position.distanceTo(nodesMetadata[a].octreeNode.box.getCenter(new THREE.Vector3()));
                const distanceB = camera.position.distanceTo(nodesMetadata[b].octreeNode.box.getCenter(new THREE.Vector3()));
                return distanceB - distanceA; // Unload farthest nodes first
            });

            if (nodesToUnload.length === 0) break;
            unloadNode(nodesToUnload[0]);
        }
    }

    isLoading = false;
    console.log(`loadNextNode finished. Total loaded points: ${totalLoadedPoints}`);
    renderer.render(scene, camera);

    debugSceneContents();
}

function parseHierarchyVLR(buffer) {
    const view = new DataView(buffer);
    const entries = [];
    let offset = 0;

    while (offset < buffer.byteLength) {
        const entry = {
            key: {
                level: view.getInt32(offset, true),
                x: view.getInt32(offset + 4, true),
                y: view.getInt32(offset + 8, true),
                z: view.getInt32(offset + 12, true)
            },
            offset: view.getBigUint64(offset + 16, true),
            byteSize: view.getInt32(offset + 24, true),
            pointCount: view.getInt32(offset + 28, true)
        };
        entries.push(entry);
        offset += 32;
    }

    return entries;
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

    console.log("Camera position set to:", camera.position);
    console.log("Camera looking at:", controls.target);
    console.log("Camera near plane:", camera.near);
    console.log("Camera far plane:", camera.far);

    // Force an update of visible nodes after setting the camera
    updateVisibleNodes();

    // Debug the scene contents after setting up the camera
    debugSceneContents();
}

function createDebugAxes(size) {
    const axes = new THREE.AxesHelper(size);
    scene.add(axes);
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
    gui.add(debugParams, 'pointSize', 0.001, 1).onChange((value) => {
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

    if (animate.frameCount % 10000 === 0) {
        console.log("Camera position:", camera.position);
        console.log("Camera lookAt:", controls.target);
        console.log("Total loaded points:", totalLoadedPoints);
        console.log("Rendering frame...");
        debugSceneContents();
    }
    animate.frameCount = (animate.frameCount || 0) + 1;

    renderer.render(scene, camera);
}

function visualizeLoadedPoints() {
    const geometry = new THREE.BufferGeometry();
    const positions = [];
    const colors = [];

    scene.traverse((object) => {
        if (object instanceof THREE.Points) {
            const positionAttribute = object.geometry.getAttribute('position');
            const colorAttribute = object.geometry.getAttribute('color');
            for (let i = 0; i < positionAttribute.count; i++) {
                positions.push(positionAttribute.getX(i), positionAttribute.getY(i), positionAttribute.getZ(i));
                colors.push(colorAttribute.getX(i), colorAttribute.getY(i), colorAttribute.getZ(i));
            }
        }
    });

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
        size: debugParams.pointSize * 2,
        vertexColors: true,
        sizeAttenuation: false
    });

    const debugPoints = new THREE.Points(geometry, material);
    scene.add(debugPoints);

    console.log(`Visualized ${positions.length / 3} points for debugging`);

    // Force a render to show the debug points
    renderer.render(scene, camera);
}

function debugSceneContents() {
    console.log("Debugging scene contents:");
    scene.traverse((object) => {
        if (object instanceof THREE.Points) {
            console.log("Found Points object:", object);
            console.log("  Geometry:", object.geometry);
            console.log("  Material:", object.material);
            console.log("  Position:", object.position);
            console.log("  Number of points:", object.geometry.attributes.position.count);
        }
    });
}

console.log("Script loaded, calling init()");
init();

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
