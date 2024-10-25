import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import {Copc} from 'copc';
import {EyeDomeLightingMaterial} from "./edl.js";

// EDL Point vertex shader
// Balanced vertex shader
const edlVertexShader = `
varying vec3 vColor;
uniform float size;
uniform float scale;
uniform float spacing;
uniform float densityAdaptiveFactor;

void main() {
    vColor = color;
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    
    // More moderate distance-based scaling
    float dist = max(0.1, -mvPosition.z);
    float distanceFactor = 1.0 / dist;
    
    // Reduced base size and more moderate adaptive scaling
    float adaptiveSpacing = pow(spacing, 0.4);
    float baseSize = size * 2.0; // Reduced from 4.0
    
    // More moderate size scaling in sparse areas
    float adaptiveFactor = densityAdaptiveFactor * (1.0 + adaptiveSpacing * 2.0);
    float adaptiveSize = baseSize * mix(1.0, 3.0, adaptiveSpacing) * adaptiveFactor;
    
    // Reduced size multiplier range
    float sizeMultiplier = mix(1.5, 2.5, smoothstep(0.0, 1.0, distanceFactor));
    
    // More moderate size limits
    gl_PointSize = max(
        3.0, // Reduced minimum size
        min(60.0, adaptiveSize * scale * sizeMultiplier) // Reduced maximum size
    );
}`;

// Slightly adjusted fragment shader
const edlPointFragmentShader = `
varying vec3 vColor;

void main() {
    vec2 center = gl_PointCoord - vec2(0.5);
    float dist = length(center);
    
    // Slightly harder edges for better definition
    float alpha = 1.0 - smoothstep(0.35, 0.5, dist);
    
    if(dist > 0.5) {
        discard;
    }
    
    // Reduced center boost
    float centerBoost = 1.0 - smoothstep(0.0, 0.2, dist);
    vec3 adjustedColor = vColor * (1.0 + centerBoost * 0.1);
    
    gl_FragColor = vec4(adjustedColor, alpha);
}`;

// Helper function to check shader compilation
function checkShaderError(gl, shader, source) {
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('Shader compile error:', gl.getShaderInfoLog(shader));
        console.error('Shader source:', source);
        return false;
    }
    return true;
}

// EDL Pass shader
const edlShader = {
    uniforms: {
        tDiffuse: {value: null},
        tDepth: {value: null},
        size: {value: window.innerWidth},
        intensity: {value: 2.0},      // Increased from 1.2
        radius: {value: 1.5},         // Reduced for sharper detail
        opacity: {value: 1.0},
        cameraNear: {value: 0.1},
        cameraFar: {value: 1000.0}
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
        uniform sampler2D tDepth;
        uniform float size;
        uniform float intensity;
        uniform float radius;
        uniform float opacity;
        uniform float cameraNear;
        uniform float cameraFar;
        varying vec2 vUv;

        float linearizeDepth(float depth) {
            float z = depth * 2.0 - 1.0;
            return (2.0 * cameraNear * cameraFar) / (cameraFar + cameraNear - z * (cameraFar - cameraNear));
        }

        float getDepth(vec2 coord) {
            float depth = texture2D(tDepth, coord).r;
            return linearizeDepth(depth);
        }

        float calculateEDL() {
            float depth = getDepth(vUv);
            if(depth >= 1.0) {
                return 1.0;
            }

            float sum = 0.0;
            float numberOfNeighbors = 8.0;
            vec2 pixelSize = vec2(1.0 / size);
            float r = radius;

            // Enhanced neighbor sampling with depth normalization
            float[] samples = float[](
                getDepth(vUv + vec2(-r, -r) * pixelSize),
                getDepth(vUv + vec2(0.0, -r) * pixelSize),
                getDepth(vUv + vec2(r, -r) * pixelSize),
                getDepth(vUv + vec2(-r, 0.0) * pixelSize),
                getDepth(vUv + vec2(r, 0.0) * pixelSize),
                getDepth(vUv + vec2(-r, r) * pixelSize),
                getDepth(vUv + vec2(0.0, r) * pixelSize),
                getDepth(vUv + vec2(r, r) * pixelSize)
            );

            // Enhanced depth difference calculation
            for(int i = 0; i < 8; i++) {
                float depthDiff = depth - samples[i];
                // Non-linear scaling of depth differences
                sum += exp(-depthDiff * intensity) * smoothstep(0.0, 0.1, abs(depthDiff));
            }

            // Enhanced illumination calculation
            float edl = 1.0 - (sum / numberOfNeighbors);
            return pow(edl, 1.5); // Enhanced contrast
        }

        void main() {
            vec4 color = texture2D(tDiffuse, vUv);
            float edl = calculateEDL();
            
            // Enhanced shading with ambient occlusion
            float ao = mix(0.5, 1.0, edl);
            vec3 shadedColor = color.rgb * ao;
            
            gl_FragColor = vec4(shadedColor, color.a * opacity);
        }
    `
};


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
            rotateSpeed: 1.0,
            zoomSpeed: 1.2,
            panSpeed: 1.0,
            basePointSize: 0.025,
            minPointSize: 0.003,
            maxPointSize: 0.15,
            densityAdaptiveFactor: 1.5, // Controls how much point size increases in sparse areas
            pointSizeScalingFactor: 1.5  // Global multiplier for point sizes
        };

        this.pointBudget = {
            target: 5_000_000,  // Target number of points
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
            nodeDepths: new Map(),  // Track depth of each node
            minNodeSpacing: null,
            maxNodeSpacing: null
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

            // Calculate min/max node spacing after loading COPC info
            // Replace the calculateNodeSpacings function with this version
            const calculateNodeSpacings = () => {
                if (!this.lodState.nodeHierarchy || !this.copc?.info?.spacing) {
                    console.warn('Unable to calculate node spacings - missing required data');
                    return;
                }

                const rootSpacing = this.copc.info.spacing;
                // Use a fixed maximum depth instead of calculating from nodes
                const estimatedMaxDepth = 12; // Typical max depth for most point clouds

                this.lodState.minNodeSpacing = rootSpacing * Math.pow(0.5, estimatedMaxDepth);
                this.lodState.maxNodeSpacing = rootSpacing;

                console.log('Node spacings calculated:', {
                    min: this.lodState.minNodeSpacing,
                    max: this.lodState.maxNodeSpacing
                });
            };

            console.log('Loading initial nodes...');
            await this.loadInitialNodes(nodes);
            calculateNodeSpacings();

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

        // Set up EDL rendering
        this.setupEDLRendering();
    }

    // Then modify your setupEDLRendering method
    setupEDLRendering() {
        const width = this.container.clientWidth;
        const height = this.container.clientHeight;

        this.renderTarget = new THREE.WebGLRenderTarget(width, height, {
            minFilter: THREE.NearestFilter,
            magFilter: THREE.NearestFilter,
            format: THREE.RGBAFormat,
            type: THREE.FloatType
        });

        this.depthTarget = new THREE.WebGLRenderTarget(width, height, {
            minFilter: THREE.NearestFilter,
            magFilter: THREE.NearestFilter,
            format: THREE.RGBAFormat,
            type: THREE.FloatType
        });

        // Create EDL material
        const edlMaterial = new EyeDomeLightingMaterial();
        edlMaterial.uniforms.tDiffuse.value = this.renderTarget.texture;
        edlMaterial.uniforms.tDepth.value = this.depthTarget.texture;
        edlMaterial.uniforms.screenWidth.value = width;
        edlMaterial.uniforms.screenHeight.value = height;
        edlMaterial.uniforms.edlStrength.value = 1.0;
        edlMaterial.uniforms.radius.value = 1.5;
        edlMaterial.uniforms.uNear.value = this.camera.near;
        edlMaterial.uniforms.uFar.value = this.camera.far;

        // Create screen quad
        const geometry = new THREE.PlaneGeometry(2, 2);
        this.edlQuad = new THREE.Mesh(geometry, edlMaterial);
        this.edlQuad.frustumCulled = false;

        this.edlScene = new THREE.Scene();
        this.edlScene.add(this.edlQuad);

        // Create orthographic camera for post-processing
        this.edlCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    }


    setupScrollHandler() {
        this.renderer.domElement.addEventListener('wheel', (event) => {
            if (event.shiftKey) {
                event.preventDefault();
                const delta = event.deltaY > 0 ? 0.9 : 1.1;
                this.adjustPointSize(delta);
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
                case '[':
                    this.updateDensityAdaptiveFactor(
                        this.controlState.densityAdaptiveFactor * 0.9
                    );
                    break;
                case ']':
                    this.updateDensityAdaptiveFactor(
                        this.controlState.densityAdaptiveFactor * 1.1
                    );
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
        this.controlState.basePointSize = THREE.MathUtils.clamp(
            this.controlState.basePointSize * factor,
            this.controlState.minPointSize,
            this.controlState.maxPointSize
        );

        this.scene.traverse((node) => {
            if (node instanceof THREE.Points) {
                if (node.material.uniforms && node.material.uniforms.size) {
                    node.material.uniforms.size.value = this.controlState.basePointSize;
                }
            }
        });
    }

    updateDensityAdaptiveFactor(factor) {
        this.controlState.densityAdaptiveFactor = THREE.MathUtils.clamp(factor, 0.1, 2.0);

        this.scene.traverse((node) => {
            if (node instanceof THREE.Points) {
                if (node.material.uniforms && node.material.uniforms.densityAdaptiveFactor) {
                    node.material.uniforms.densityAdaptiveFactor.value =
                        this.controlState.densityAdaptiveFactor;
                }
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

                // Modified transformation to fix orientation
                // We swap Y and Z coordinates and negate Z to correct the orientation
                const normalizedX = (nodeCenter.x - this.centerOffset.x + relX) * this.scale;
                const normalizedY = (nodeCenter.z - this.centerOffset.z + relZ) * this.scale; // Swap Y with Z
                const normalizedZ = -(nodeCenter.y - this.centerOffset.y + relY) * this.scale; // Negate Y and use as Z

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

            // Calculate node-specific spacing
            const nodeSpacing = this.copc.info.spacing * Math.pow(0.5, depth);
            const normalizedSpacing = (nodeSpacing - this.lodState.minNodeSpacing) /
                (this.lodState.maxNodeSpacing - this.lodState.minNodeSpacing);

            const material = new THREE.ShaderMaterial({
                vertexShader: edlVertexShader,
                fragmentShader: edlPointFragmentShader,
                uniforms: {
                    size: {value: this.controlState.basePointSize},
                    scale: {value: window.devicePixelRatio},
                    spacing: {
                        value: this.lodState.maxNodeSpacing ?
                            (nodeSpacing - this.lodState.minNodeSpacing) /
                            (this.lodState.maxNodeSpacing - this.lodState.minNodeSpacing) :
                            1.0
                    },
                    densityAdaptiveFactor: {value: this.controlState.densityAdaptiveFactor}
                },
                vertexColors: true
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
        if (!force &&
            now - this.lodState.lastViewUpdateTime < this.lodState.viewUpdateThrottle) {
            return;
        }

        // Add a loading state check
        if (this.lodState.isUpdating) {
            return;
        }

        try {
            this.lodState.isUpdating = true;
            this.lodState.lastViewUpdateTime = now;

            // Don't process if we're already loading too many nodes
            if (this.lodState.loadingNodes.size >= this.lodState.maxConcurrentLoads) {
                return;
            }

            // Create frustum for view culling
            const frustum = new THREE.Frustum();
            const projScreenMatrix = new THREE.Matrix4();
            projScreenMatrix.multiplyMatrices(
                this.camera.projectionMatrix,
                this.camera.matrixWorldInverse
            );
            frustum.setFromProjectionMatrix(projScreenMatrix);

            // Helper to check if node is in view frustum
            const isNodeInFrustum = (nodeKey) => {
                const bounds = this.getNodeBounds(nodeKey);
                const box = new THREE.Box3(
                    new THREE.Vector3(...bounds.min).sub(this.centerOffset).multiplyScalar(this.scale),
                    new THREE.Vector3(...bounds.max).sub(this.centerOffset).multiplyScalar(this.scale)
                );
                return frustum.intersectsBox(box);
            };

            // STEP 1: Unload nodes that are outside the frustum
            let currentPointCount = 0;
            const remainingNodes = new Map();

            for (const [nodeKey, nodeInfo] of this.loadedNodes) {
                if (!isNodeInFrustum(nodeKey)) {
                    this.unloadNode(nodeKey);
                } else {
                    remainingNodes.set(nodeKey, nodeInfo);
                    currentPointCount += nodeInfo.pointCount;
                }
            }

            // Update loadedNodes to only contain nodes still in frustum
            this.loadedNodes = remainingNodes;

            // STEP 2: Collect potentially visible nodes by depth
            const nodesByDepth = new Map();
            const visibleNodes = new Set(this.loadedNodes.keys());

            const getNodeScreenSize = (nodeKey) => {
                const bounds = this.getNodeBounds(nodeKey);
                const nodeCenter = new THREE.Vector3(
                    (bounds.max[0] + bounds.min[0]) / 2,
                    (bounds.max[1] + bounds.min[1]) / 2,
                    (bounds.max[2] + bounds.min[2]) / 2
                ).sub(this.centerOffset).multiplyScalar(this.scale);

                const distance = this.camera.position.distanceTo(nodeCenter);
                const size = new THREE.Vector3(
                    bounds.max[0] - bounds.min[0],
                    bounds.max[1] - bounds.min[1],
                    bounds.max[2] - bounds.min[2]
                ).length() * this.scale;

                const fov = this.camera.fov * Math.PI / 180;
                return (size * this.renderer.domElement.height) / (2 * distance * Math.tan(fov / 2));
            };

            // Only collect nodes up to a reasonable depth based on distance
            const getMaxDepthForDistance = (nodeKey) => {
                const bounds = this.getNodeBounds(nodeKey);
                const nodeCenter = new THREE.Vector3(
                    (bounds.max[0] + bounds.min[0]) / 2,
                    (bounds.max[1] + bounds.min[1]) / 2,
                    (bounds.max[2] + bounds.min[2]) / 2
                ).sub(this.centerOffset).multiplyScalar(this.scale);

                const distance = this.camera.position.distanceTo(nodeCenter);
                // Limit max depth based on distance - closer = more detail
                return Math.min(Math.floor(8 - Math.log2(distance)), 12);
            };

            const collectVisibleNodes = (nodeKey) => {
                const node = this.lodState.nodeHierarchy[nodeKey];
                if (!node || !isNodeInFrustum(nodeKey)) {
                    return;
                }

                const depth = parseInt(nodeKey.split('-')[0]);
                const maxDepth = getMaxDepthForDistance(nodeKey);

                if (depth > maxDepth) {
                    return;
                }

                if (!nodesByDepth.has(depth)) {
                    nodesByDepth.set(depth, new Set());
                }
                nodesByDepth.get(depth).add({key: nodeKey, node});

                // Only check children if we're below max depth and node needs more detail
                if (depth < maxDepth) {
                    const screenSize = getNodeScreenSize(nodeKey);
                    if (screenSize > this.lodState.maxScreenSpaceError) {
                        const childKeys = this.getChildKeys(nodeKey);
                        for (const childKey of childKeys) {
                            if (this.lodState.nodeHierarchy[childKey]) {
                                collectVisibleNodes(childKey);
                            }
                        }
                    }
                }
            };


            // Start collection from root
            collectVisibleNodes('0-0-0-0');

            // STEP 3: Select nodes to load, being very conservative
            const remainingBudget = this.pointBudget.target - currentPointCount;
            const availableLoadSlots = this.lodState.maxConcurrentLoads - this.lodState.loadingNodes.size;
            const nodesToLoad = new Map();
            let selectedNodeCount = 0;

            // Sort depths from coarsest to finest
            const depths = Array.from(nodesByDepth.keys()).sort((a, b) => a - b);

            // First pass: prioritize coarser levels
            for (const depth of depths) {
                const nodesAtDepth = nodesByDepth.get(depth);

                for (const {key, node} of nodesAtDepth) {
                    // Skip if already loaded or loading
                    if (this.loadedNodes.has(key) || this.lodState.loadingNodes.has(key)) {
                        continue;
                    }

                    // Stop if we've hit either limit
                    if (selectedNodeCount >= availableLoadSlots ||
                        node.pointCount > remainingBudget - currentPointCount) {
                        break;
                    }

                    nodesToLoad.set(key, node);
                    currentPointCount += node.pointCount;
                    selectedNodeCount++;
                    visibleNodes.add(key);
                }

                if (selectedNodeCount >= availableLoadSlots ||
                    currentPointCount >= this.pointBudget.target) {
                    break;
                }
            }

            // STEP 4: Load selected nodes
            const loadPromises = [];

            for (const [nodeKey, node] of nodesToLoad) {
                loadPromises.push(this.loadNode(node, nodeKey));
            }

            await Promise.all(loadPromises);
            this.lodState.visibleNodes = visibleNodes;
            this.pointBudget.current = currentPointCount;

            // Log statistics
            const depthInfo = Array.from(nodesByDepth.entries())
                .map(([depth, nodes]) => `D${depth}: ${nodes.size}`)
                .join(', ');
            console.log(`Selected ${selectedNodeCount} nodes to load`);
            console.log(`Visible nodes by depth: ${depthInfo}`);
            console.log(`Total points: ${currentPointCount.toLocaleString()}/${this.pointBudget.target.toLocaleString()}`);
        } finally {
            this.lodState.isUpdating = false;
        }
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
    // Replace your existing animate method with this version
    animate() {
        if (!this.isInitialized) return;

        requestAnimationFrame(() => this.animate());

        this.controls.update();
        this.updateVisibleNodes();

        // Update EDL projection matrix uniform
        if (this.edlQuad) {
            this.edlQuad.material.uniforms.uProj.value.copy(this.camera.projectionMatrix);
        }

        // 1. First render pass - render scene to render target
        if (this.renderTarget && this.depthTarget) {
            // Store current render target
            const currentRenderTarget = this.renderer.getRenderTarget();

            // Render color to renderTarget
            this.renderer.setRenderTarget(this.renderTarget);
            this.renderer.clear();
            this.renderer.render(this.scene, this.camera);

            // Render depth to depthTarget
            this.renderer.setRenderTarget(this.depthTarget);
            this.renderer.clear();
            this.renderer.render(this.scene, this.camera);

            // 2. Second render pass - apply EDL effect
            this.renderer.setRenderTarget(null);
            this.renderer.clear();
            this.renderer.render(this.edlScene, this.edlCamera);

            // Restore original render target
            this.renderer.setRenderTarget(currentRenderTarget);
        } else {
            // Fallback to normal rendering if targets aren't ready
            this.renderer.render(this.scene, this.camera);
        }

        const now = performance.now();
        const delta = now - this.stats.lastFrameTime;
        this.stats.frameCount++;

        if (delta >= 1000) {
            this.stats.fps = (this.stats.frameCount * 1000) / delta;
            this.stats.frameCount = 0;
            this.stats.lastFrameTime = now;
            this.updateStatsDisplay();
        }
    }

// Add a method to enable/disable EDL effect
    toggleEDL(enabled = true) {
        if (enabled) {
            this.renderTarget = new THREE.WebGLRenderTarget(
                this.container.clientWidth,
                this.container.clientHeight,
                {
                    minFilter: THREE.NearestFilter,
                    magFilter: THREE.NearestFilter,
                    format: THREE.RGBAFormat,
                    type: THREE.FloatType
                }
            );

            this.depthTarget = new THREE.WebGLRenderTarget(
                this.container.clientWidth,
                this.container.clientHeight,
                {
                    minFilter: THREE.NearestFilter,
                    magFilter: THREE.NearestFilter,
                    format: THREE.RGBAFormat,
                    type: THREE.FloatType
                }
            );
        } else {
            if (this.renderTarget) {
                this.renderTarget.dispose();
                this.renderTarget = null;
            }
            if (this.depthTarget) {
                this.depthTarget.dispose();
                this.depthTarget = null;
            }
        }
    }

// Add methods to adjust EDL parameters
    setEDLStrength(value) {
        if (this.edlQuad) {
            this.edlQuad.material.uniforms.edlStrength.value = value;
        }
    }

    setEDLRadius(value) {
        if (this.edlQuad) {
            this.edlQuad.material.uniforms.radius.value = value;
        }
    }

// Add cleanup to your dispose method
    dispose() {
        this.isInitialized = false;

        this.loadedNodes.forEach((_, nodeKey) => this.unloadNode(nodeKey));

        if (this.renderTarget) {
            this.renderTarget.dispose();
        }
        if (this.depthTarget) {
            this.depthTarget.dispose();
        }
        if (this.edlQuad) {
            this.edlQuad.geometry.dispose();
            this.edlQuad.material.dispose();
        }

        if (this.renderer) {
            this.renderer.dispose();
        }

        if (this.controls) {
            this.controls.dispose();
        }

        this.container.innerHTML = '';
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

        const width = this.container.clientWidth;
        const height = this.container.clientHeight;

        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(width, height);

        // Update EDL uniforms
        if (this.edlQuad) {
            this.edlQuad.material.uniforms.screenWidth.value = width;
            this.edlQuad.material.uniforms.screenHeight.value = height;
            this.edlQuad.material.uniforms.uProj.value.copy(this.camera.projectionMatrix);
        }

        // Update render targets
        this.renderTarget.setSize(width, height);
        this.depthTarget.setSize(width, height);
    }
}

export default COPCViewer;