import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import {Copc} from 'copc';

class COPCViewer {
    // --------------------
    // Initialization
    // --------------------
    constructor(containerSelector, filename) {
        console.log('Initializing COPC viewer with:', {containerSelector, filename});

        // Initialize container
        this.container = typeof containerSelector === 'string'
            ? document.querySelector(containerSelector)
            : containerSelector;

        if (!this.container) {
            throw new Error(`Container not found: ${containerSelector}`);
        }

        // Ensure container has valid dimensions
        if (this.container.clientWidth === 0 || this.container.clientHeight === 0) {
            this.container.style.width = '100%';
            this.container.style.height = '100%';

            if (this.container.clientWidth === 0 || this.container.clientHeight === 0) {
                if (this.container.parentElement) {
                    this.container.style.width = `${this.container.parentElement.clientWidth}px`;
                    this.container.style.height = `${this.container.parentElement.clientHeight}px`;
                } else {
                    this.container.style.width = '800px';
                    this.container.style.height = '600px';
                }
            }
        }

        if (getComputedStyle(this.container).position === 'static') {
            this.container.style.position = 'relative';
        }

        // Initialize properties
        this.filename = filename;
        this.loadedNodes = new Map();
        this.maxLoadedNodes = 50;
        this.isInitialized = false;

        // Initialize stats
        this.stats = {
            totalPointsLoaded: 0,
            nodesLoaded: 0,
            lastFrameTime: performance.now(),
            frameCount: 0,
            fps: 0,
        };

        // Add control state
        this.controlState = {
            pointSize: 0.01,
            minPointSize: 0.001,
            maxPointSize: 0.1,
            rotateSpeed: 1.0,
            zoomSpeed: 1.2,
            panSpeed: 1.0
        };

        this.pointBudget = {
            target: 1_000_000,  // Target number of points
            current: 0,         // Current number of points
            nodeScores: new Map() // Store scores for each node
        };

        this.lodState = {
            maxScreenSpaceError: 8.0,
            maxConcurrentLoads: 4,
            loadingNodes: new Set(),
            nodeHierarchy: null,
            visibleNodes: new Set(),
            lastViewUpdateTime: 0,
            viewUpdateThrottle: 100,
            spacing: null,
            cubeBounds: null,
            nodeDepths: new Map()  // Track depth of each node
        };

        // Create stats display
        this.createStatsDisplay();

        // Start initialization
        this.init();
    }

    async init() {
        console.log('Starting initialization...');

        try {
            // Initialize Three.js scene
            this.scene = new THREE.Scene();
            this.camera = new THREE.PerspectiveCamera(
                75,
                this.container.clientWidth / this.container.clientHeight,
                0.1,
                10000
            );

            this.renderer = new THREE.WebGLRenderer({antialias: true});
            this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
            this.container.appendChild(this.renderer.domElement);

            this.controls = new OrbitControls(this.camera, this.renderer.domElement);
            this.controls.addEventListener('change', () => this.updateVisibleNodes());

            console.log('Loading COPC file...');
            this.copc = await Copc.create(this.filename);

            // Store COPC info for LOD calculations
            this.lodState.spacing = this.copc.info.spacing;
            this.lodState.cubeBounds = this.copc.info.cube;

            console.log('COPC info loaded:', {
                spacing: this.lodState.spacing,
                cubeBounds: this.lodState.cubeBounds
            });
            console.log('COPC file loaded:', {
                header: this.copc.header,
                pointFormat: this.copc.header.pointDataRecordFormat,
                pointLength: this.copc.header.pointDataRecordLength,
                totalPoints: this.copc.header.totalPoints
            });

            // Calculate center offset for normalization
            const {header} = this.copc;
            this.centerOffset = new THREE.Vector3(
                (header.max[0] + header.min[0]) / 2,
                (header.max[1] + header.min[1]) / 2,
                (header.max[2] + header.min[2]) / 2
            );

            // Set scale based on point cloud size
            const sizeX = Math.abs(header.max[0] - header.min[0]);
            const sizeY = Math.abs(header.max[1] - header.min[1]);
            const sizeZ = Math.abs(header.max[2] - header.min[2]);
            const maxSize = Math.max(sizeX, sizeY, sizeZ);
            this.scale = maxSize > 0 ? 1 / maxSize : 1;

            console.log('Point cloud stats:', {
                centerOffset: {
                    x: this.centerOffset.x,
                    y: this.centerOffset.y,
                    z: this.centerOffset.z
                },
                size: {
                    x: sizeX,
                    y: sizeY,
                    z: sizeZ
                },
                scale: this.scale
            });

            console.log('Loading hierarchy page...');
            const {nodes, pages} = await Copc.loadHierarchyPage(
                this.filename,
                this.copc.info.rootHierarchyPage
            );

            console.log('Hierarchy loaded:', {
                nodeKeys: Object.keys(nodes),
                nodeCount: Object.keys(nodes).length,
                pageCount: Object.keys(pages).length
            });

            this.setupScene();

            console.log('Loading initial nodes...');
            await this.loadInitialNodes(nodes);

            this.isInitialized = true;
            this.animate();

            this.setupResizeObserver();

            console.log('Initialization complete');

        } catch (error) {
            console.error('Failed to initialize viewer:', error);
            this.container.innerHTML = `
        <div style="color: red; padding: 20px;">
          Failed to initialize viewer: ${error.message}
        </div>
      `;
            throw error;
        }
    }

    // --------------------
    // Scene Setup and Controls
    // --------------------
    setupScene() {
        // Add axes helper for debugging
        const axesHelper = new THREE.AxesHelper(1);
        this.scene.add(axesHelper);

        // Add grid helper for reference
        const gridHelper = new THREE.GridHelper(2, 20);
        this.scene.add(gridHelper);

        // Set up camera
        this.camera.position.set(2, 2, 2);
        this.camera.lookAt(0, 0, 0);

        // Enhanced OrbitControls setup
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.target.set(0, 0, 0);

        // Configure control settings
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.05;
        this.controls.rotateSpeed = this.controlState.rotateSpeed;
        this.controls.zoomSpeed = this.controlState.zoomSpeed;
        this.controls.panSpeed = this.controlState.panSpeed;

        // Enable all controls
        this.controls.enableRotate = true;
        this.controls.enableZoom = true;
        this.controls.enablePan = true;

        // Add mouse button mappings
        this.controls.mouseButtons = {
            LEFT: THREE.MOUSE.ROTATE,
            MIDDLE: THREE.MOUSE.DOLLY,
            RIGHT: THREE.MOUSE.PAN
        };

        // Add touch controls
        this.controls.touches = {
            ONE: THREE.TOUCH.ROTATE,
            TWO: THREE.TOUCH.DOLLY_PAN
        };

        // Set up camera constraints
        this.controls.minDistance = 0.1;
        this.controls.maxDistance = 10;
        this.controls.minPolarAngle = 0;
        this.controls.maxPolarAngle = Math.PI;

        // Add scroll wheel handler for point size adjustment
        this.setupScrollHandler();

        // Set better camera near/far planes based on point cloud size
        const {header} = this.copc;
        const size = Math.max(
            header.max[0] - header.min[0],
            header.max[1] - header.min[1],
            header.max[2] - header.min[2]
        );
        this.camera.near = size * this.scale * 0.0001;
        this.camera.far = size * this.scale * 10;
        this.camera.updateProjectionMatrix();

        // Add keyboard controls
        this.setupKeyboardControls();
    }

    setupScrollHandler() {
        this.renderer.domElement.addEventListener('wheel', (event) => {
            if (event.shiftKey) {
                event.preventDefault();
                const delta = event.deltaY > 0 ? 0.9 : 1.1;
                this.controlState.pointSize = THREE.MathUtils.clamp(
                    this.controlState.pointSize * delta,
                    this.controlState.minPointSize,
                    this.controlState.maxPointSize
                );

                this.scene.traverse((node) => {
                    if (node instanceof THREE.Points) {
                        node.material.size = this.controlState.pointSize;
                    }
                });
            }
        }, {passive: false});
    }

    setupKeyboardControls() {
        window.addEventListener('keydown', (event) => {
            switch (event.key.toLowerCase()) {
                case 'r':
                    this.resetView();
                    break;
                case '+':
                    this.adjustPointSize(1.1);
                    break;
                case '-':
                    this.adjustPointSize(0.9);
                    break;
                case 'g':
                    this.toggleGrid();
                    break;
            }
        });
    }

    resetView() {
        this.camera.position.set(2, 2, 2);
        this.controls.target.set(0, 0, 0);
        this.camera.lookAt(0, 0, 0);
        this.controls.reset();

        this.controlState.pointSize = 0.01;
        this.scene.traverse((node) => {
            if (node instanceof THREE.Points) {
                node.material.size = this.controlState.pointSize;
            }
        });
    }

    adjustPointSize(factor) {
        this.controlState.pointSize = THREE.MathUtils.clamp(
            this.controlState.pointSize * factor,
            this.controlState.minPointSize,
            this.controlState.maxPointSize
        );

        this.scene.traverse((node) => {
            if (node instanceof THREE.Points) {
                node.material.size = this.controlState.pointSize;
            }
        });
    }

    toggleGrid() {
        this.scene.traverse((node) => {
            if (node instanceof THREE.GridHelper) {
                node.visible = !node.visible;
            }
        });
    }

    // --------------------
    // Node Management and Loading
    // --------------------
    async loadInitialNodes(nodes) {
        this.lodState.nodeHierarchy = nodes;
        const rootNode = nodes['0-0-0-0'];
        if (!rootNode) {
            console.error('Root node not found!');
            return;
        }

        await this.loadNode(rootNode, '0-0-0-0');
        await this.updateVisibleNodes(true);
    }

    async loadNode(node, nodeKey) {
        if (!node || this.loadedNodes.has(nodeKey)) return;

        try {
            this.lodState.loadingNodes.add(nodeKey);
            const view = await Copc.loadPointDataView(this.filename, this.copc, node);

            const getX = view.getter('X');
            const getY = view.getter('Y');
            const getZ = view.getter('Z');
            const getRed = view.getter('Red');
            const getGreen = view.getter('Green');
            const getBlue = view.getter('Blue');

            if (!node.pointCount) {
                console.warn(`Node ${nodeKey} has no points`);
                return;
            }

            const nodeBounds = this.getNodeBounds(nodeKey);
            const nodeCenter = new THREE.Vector3(
                (nodeBounds.min[0] + nodeBounds.max[0]) / 2,
                (nodeBounds.min[1] + nodeBounds.max[1]) / 2,
                (nodeBounds.min[2] + nodeBounds.max[2]) / 2
            );

            const positions = new Float32Array(node.pointCount * 3);
            const colors = new Float32Array(node.pointCount * 3);
            let validPoints = 0;

            for (let i = 0; i < node.pointCount; i++) {
                const x = getX(i);
                const y = getY(i);
                const z = getZ(i);

                if (!isFinite(x) || !isFinite(y) || !isFinite(z)) continue;

                const relX = x - nodeCenter.x;
                const relY = y - nodeCenter.y;
                const relZ = z - nodeCenter.z;

                const normalizedX = (nodeCenter.x - this.centerOffset.x + relX) * this.scale;
                const normalizedY = (nodeCenter.y - this.centerOffset.y + relY) * this.scale;
                const normalizedZ = (nodeCenter.z - this.centerOffset.z + relZ) * this.scale;

                positions[validPoints * 3] = normalizedX;
                positions[validPoints * 3 + 1] = normalizedY;
                positions[validPoints * 3 + 2] = normalizedZ;

                if (getRed && getGreen && getBlue) {
                    colors[validPoints * 3] = getRed(i) / 65535;
                    colors[validPoints * 3 + 1] = getGreen(i) / 65535;
                    colors[validPoints * 3 + 2] = getBlue(i) / 65535;
                } else {
                    colors[validPoints * 3] = 0.7;
                    colors[validPoints * 3 + 1] = 0.7;
                    colors[validPoints * 3 + 2] = 0.7;
                }

                validPoints++;
            }

            if (validPoints === 0) return;

            const geometry = new THREE.BufferGeometry();
            const trimmedPositions = new Float32Array(positions.buffer, 0, validPoints * 3);
            const trimmedColors = new Float32Array(colors.buffer, 0, validPoints * 3);

            // Set the attributes on the geometry
            geometry.setAttribute('position', new THREE.BufferAttribute(trimmedPositions, 3));
            geometry.setAttribute('color', new THREE.BufferAttribute(trimmedColors, 3));

            const depth = parseInt(nodeKey.split('-')[0]);
            const nodeSize = Math.max(
                nodeBounds.max[0] - nodeBounds.min[0],
                nodeBounds.max[1] - nodeBounds.min[1],
                nodeBounds.max[2] - nodeBounds.min[2]
            );
            const basePointSize = this.controlState.pointSize * this.scale * nodeSize;
            const pointSize = basePointSize * Math.pow(0.5, depth);

            const material = new THREE.PointsMaterial({
                size: pointSize,
                vertexColors: true,
                sizeAttenuation: true
            });

            const pointCloud = new THREE.Points(geometry, material);
            pointCloud.name = `node-${nodeKey}`;
            this.scene.add(pointCloud);

            this.loadedNodes.set(nodeKey, {
                lastAccessed: performance.now(),
                pointCount: validPoints
            });

            this.stats.totalPointsLoaded += validPoints;
            this.stats.nodesLoaded = this.loadedNodes.size;

        } catch (error) {
            console.error(`Failed to load node ${nodeKey}:`, error);
        } finally {
            this.lodState.loadingNodes.delete(nodeKey);
        }
    }

    unloadNode(nodeKey) {
        const node = this.scene.getObjectByName(`node-${nodeKey}`);
        if (node) {
            this.scene.remove(node);
            node.geometry.dispose();
            node.material.dispose();
            const nodeInfo = this.loadedNodes.get(nodeKey);
            if (nodeInfo) {
                this.stats.totalPointsLoaded -= nodeInfo.pointCount;
            }
            this.loadedNodes.delete(nodeKey);
        }
    }

    // --------------------
    // Level of Detail (LOD) Management
    // --------------------
    async updateVisibleNodes(force = false) {
        const now = performance.now();
        if (!force && now - this.lodState.lastViewUpdateTime < this.lodState.viewUpdateThrottle) {
            return;
        }
        this.lodState.lastViewUpdateTime = now;

        const frustum = new THREE.Frustum();
        const projScreenMatrix = new THREE.Matrix4();
        projScreenMatrix.multiplyMatrices(
            this.camera.projectionMatrix,
            this.camera.matrixWorldInverse
        );
        frustum.setFromProjectionMatrix(projScreenMatrix);

        const nodesByDepth = new Map();
        const visibleNodes = new Set();
        let currentPointCount = 0;

        const isNodeInFrustum = (nodeKey) => {
            const bounds = this.getNodeBounds(nodeKey);
            const box = new THREE.Box3(
                new THREE.Vector3(...bounds.min).sub(this.centerOffset).multiplyScalar(this.scale),
                new THREE.Vector3(...bounds.max).sub(this.centerOffset).multiplyScalar(this.scale)
            );
            return frustum.intersectsBox(box);
        };

        const collectVisibleNodes = (nodeKey) => {
            const node = this.lodState.nodeHierarchy[nodeKey];
            if (!node) return;

            if (!isNodeInFrustum(nodeKey)) {
                return;
            }

            const depth = parseInt(nodeKey.split('-')[0]);
            if (!nodesByDepth.has(depth)) {
                nodesByDepth.set(depth, new Set());
            }
            nodesByDepth.get(depth).add({key: nodeKey, node});

            const childKeys = this.getChildKeys(nodeKey);
            childKeys.forEach(childKey => {
                if (this.lodState.nodeHierarchy[childKey]) {
                    collectVisibleNodes(childKey);
                }
            });
        };

        collectVisibleNodes('0-0-0-0');

        const nodesToLoad = new Map();
        const depths = Array.from(nodesByDepth.keys()).sort((a, b) => a - b);

        for (const depth of depths) {
            const nodesAtDepth = nodesByDepth.get(depth);

            for (const {key, node} of nodesAtDepth) {
                if (this.loadedNodes.has(key)) {
                    visibleNodes.add(key);
                    currentPointCount += this.loadedNodes.get(key).pointCount;
                }
            }

            for (const {key, node} of nodesAtDepth) {
                if (!this.loadedNodes.has(key) && !this.lodState.loadingNodes.has(key)) {
                    if (currentPointCount + node.pointCount <= this.pointBudget.target) {
                        visibleNodes.add(key);
                        nodesToLoad.set(key, node);
                        currentPointCount += node.pointCount;
                    } else {
                        break;
                    }
                }
            }

            if (currentPointCount >= this.pointBudget.target) {
                break;
            }
        }

        for (const [nodeKey, nodeInfo] of this.loadedNodes) {
            if (!visibleNodes.has(nodeKey)) {
                this.unloadNode(nodeKey);
                currentPointCount -= nodeInfo.pointCount;
            }
        }

        const loadPromises = [];
        let loadCount = 0;

        for (const [nodeKey, node] of nodesToLoad) {
            if (loadCount >= this.lodState.maxConcurrentLoads) break;
            loadCount++;
            loadPromises.push(this.loadNode(node, nodeKey));
        }

        await Promise.all(loadPromises);
        this.lodState.visibleNodes = visibleNodes;
        this.pointBudget.current = currentPointCount;

        const depthInfo = Array.from(nodesByDepth.entries())
            .map(([depth, nodes]) => `D${depth}: ${nodes.size}`)
            .join(', ');
        console.log(`Visible nodes by depth: ${depthInfo}`);
        console.log(`Total points: ${currentPointCount.toLocaleString()}/${this.pointBudget.target.toLocaleString()}`);
    }

    calculateNodeScore(nodeKey, cameraPosition) {
        const node = this.lodState.nodeHierarchy[nodeKey];
        if (!node) return -Infinity;

        const bounds = this.getNodeBounds(nodeKey);
        const nodeCenter = new THREE.Vector3(
            (bounds.max[0] + bounds.min[0]) / 2,
            (bounds.max[1] + bounds.min[1]) / 2,
            (bounds.max[2] + bounds.min[2]) / 2
        );

        const normalizedCenter = nodeCenter.clone()
            .sub(this.centerOffset)
            .multiplyScalar(this.scale);

        const distance = cameraPosition.distanceTo(normalizedCenter);
        if (distance === 0) return -Infinity;

        const depth = parseInt(nodeKey.split('-')[0]);
        const depthBonus = depth * 0.5;

        const pointDensity = node.pointCount /
            (Math.pow(bounds.max[0] - bounds.min[0], 2) +
                Math.pow(bounds.max[1] - bounds.min[1], 2) +
                Math.pow(bounds.max[2] - bounds.min[2], 2));

        const score = (pointDensity * depthBonus) / (distance * distance);

        return score;
    }

    calculateScreenSpaceError(nodeKey, cameraPosition) {
        const node = this.lodState.nodeHierarchy[nodeKey];
        if (!node) return Infinity;

        const bounds = this.getNodeBounds(nodeKey);
        const nodeCenter = new THREE.Vector3(
            (bounds.max[0] + bounds.min[0]) / 2,
            (bounds.max[1] + bounds.min[1]) / 2,
            (bounds.max[2] + bounds.min[2]) / 2
        );

        const nodeDiagonal = new THREE.Vector3(
            bounds.max[0] - bounds.min[0],
            bounds.max[1] - bounds.min[1],
            bounds.max[2] - bounds.min[2]
        ).length();

        nodeCenter.sub(this.centerOffset).multiplyScalar(this.scale);

        const distance = cameraPosition.distanceTo(nodeCenter);
        if (distance === 0) return Infinity;

        const depth = parseInt(nodeKey.split('-')[0]);
        const geometricError = nodeDiagonal * Math.pow(2, -depth);

        const screenHeight = this.renderer.domElement.height;
        const fov = this.camera.fov * Math.PI / 180;
        const projectedSize = (geometricError * screenHeight) / (2 * distance * Math.tan(fov / 2));

        return projectedSize;
    }

    getNodeBounds(key) {
        const [depth, x, y, z] = key.split('-').map(Number);
        const [minX, minY, minZ, maxX, maxY, maxZ] = this.lodState.cubeBounds;
        const size = (maxX - minX) / Math.pow(2, depth);
        const nodeMinX = minX + x * size;
        const nodeMinY = minY + y * size;
        const nodeMinZ = minZ + z * size;

        return {
            min: [nodeMinX, nodeMinY, nodeMinZ],
            max: [nodeMinX + size, nodeMinY + size, nodeMinZ + size]
        };
    }

    getChildKeys(nodeKey) {
        const [depth, x, y, z] = nodeKey.split('-').map(Number);
        const childDepth = depth + 1;
        const childX = x * 2;
        const childY = y * 2;
        const childZ = z * 2;

        return [
            `${childDepth}-${childX}-${childY}-${childZ}`,
            `${childDepth}-${childX + 1}-${childY}-${childZ}`,
            `${childDepth}-${childX}-${childY + 1}-${childZ}`,
            `${childDepth}-${childX + 1}-${childY + 1}-${childZ}`,
            `${childDepth}-${childX}-${childY}-${childZ + 1}`,
            `${childDepth}-${childX + 1}-${childY}-${childZ + 1}`,
            `${childDepth}-${childX}-${childY + 1}-${childZ + 1}`,
            `${childDepth}-${childX + 1}-${childY + 1}-${childZ + 1}`
        ];
    }

    // --------------------
    // Stats and Display
    // --------------------
    createStatsDisplay() {
        this.statsDisplay = document.createElement('div');
        this.statsDisplay.style.cssText = `
            position: absolute;
            top: 10px;
            left: 10px;
            background: rgba(0, 0, 0, 0.7);
            color: white;
            padding: 10px;
            font-family: monospace;
            font-size: 12px;
            pointer-events: none;
            z-index: 100;
            white-space: pre;
        `;
        this.container.appendChild(this.statsDisplay);
    }

    updateStatsDisplay() {
        if (!this.statsDisplay) return;

        const nodesByDepth = new Map();
        for (const nodeKey of this.lodState.visibleNodes) {
            const depth = parseInt(nodeKey.split('-')[0]);
            if (!nodesByDepth.has(depth)) {
                nodesByDepth.set(depth, 0);
            }
            nodesByDepth.set(depth, nodesByDepth.get(depth) + 1);
        }

        const stats = {
            'FPS': this.stats.fps.toFixed(1),
            'Points Loaded': this.stats.totalPointsLoaded.toLocaleString(),
            'Point Budget': `${this.pointBudget.current.toLocaleString()} / ${this.pointBudget.target.toLocaleString()}`,
            'Nodes by Depth': Array.from(nodesByDepth.entries())
                .sort((a, b) => a[0] - b[0])
                .map(([depth, count]) => `D${depth}: ${count}`)
                .join(', '),
            'Loading Nodes': this.lodState.loadingNodes.size,
            'Camera Position': this.camera ? {
                'X': this.camera.position.x.toFixed(2),
                'Y': this.camera.position.y.toFixed(2),
                'Z': this.camera.position.z.toFixed(2)
            } : 'Not set'
        };

        this.statsDisplay.innerHTML = Object.entries(stats)
            .map(([key, value]) => {
                if (typeof value === 'object') {
                    return `${key}:\n  ${Object.entries(value)
                        .map(([k, v]) => `${k}: ${v}`)
                        .join('\n  ')}`;
                }
                return `${key}: ${value}`;
            })
            .join('\n');
    }

    // --------------------
    // Animation and Rendering
    // --------------------
    animate() {
        if (!this.isInitialized) return;

        requestAnimationFrame(() => this.animate());

        this.controls.update();
        this.updateVisibleNodes();

        const now = performance.now();
        const delta = now - this.stats.lastFrameTime;
        this.stats.frameCount++;

        if (delta >= 1000) {
            this.stats.fps = (this.stats.frameCount * 1000) / delta;
            this.stats.frameCount = 0;
            this.stats.lastFrameTime = now;
            this.updateStatsDisplay();
        }

        this.renderer.render(this.scene, this.camera);
    }

    // --------------------
    // Utility Functions
    // --------------------
    updatePointBudget(newBudget) {
        this.pointBudget.target = newBudget;
        this.updateVisibleNodes(true);
    }

    manageMemory() {
        if (this.loadedNodes.size > this.maxLoadedNodes) {
            const nodes = Array.from(this.loadedNodes.entries())
                .sort((a, b) => a[1].lastAccessed - b[1].lastAccessed);

            while (this.loadedNodes.size > this.maxLoadedNodes) {
                const [nodeKey] = nodes.shift();
                this.unloadNode(nodeKey);
            }
        }
    }

    setupResizeObserver() {
        const resizeObserver = new ResizeObserver(entries => {
            for (const entry of entries) {
                if (entry.target === this.container) {
                    this.onResize();
                }
            }
        });
        resizeObserver.observe(this.container);
    }

    onResize() {
        if (!this.isInitialized) return;

        this.camera.aspect = this.container.clientWidth / this.container.clientHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
    }

    dispose() {
        this.isInitialized = false;

        this.loadedNodes.forEach((_, nodeKey) => this.unloadNode(nodeKey));

        if (this.renderer) {
            this.renderer.dispose();
        }

        if (this.controls) {
            this.controls.dispose();
        }

        this.container.innerHTML = '';
    }
}

export default COPCViewer;