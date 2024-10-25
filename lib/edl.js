import * as THREE from 'three';

class EyeDomeLightingMaterial extends THREE.RawShaderMaterial {
    constructor(parameters = {}) {
        super();

        this._neighbourCount = 8;
        this.neighbours = new Float32Array(this._neighbourCount * 2);

        for (let c = 0; c < this._neighbourCount; c++) {
            this.neighbours[2 * c + 0] = Math.cos(2 * c * Math.PI / this._neighbourCount);
            this.neighbours[2 * c + 1] = Math.sin(2 * c * Math.PI / this._neighbourCount);
        }

        const uniforms = {
            screenWidth:    { value: 0 },
            screenHeight:   { value: 0 },
            edlStrength:    { value: 1.0 },
            uNear:          { value: 1.0 },
            uFar:           { value: 1.0 },
            radius:         { value: 1.0 },
            neighbours:     { value: this.neighbours },
            tDepth:         { value: null },
            tDiffuse:       { value: null },
            opacity:        { value: 1.0 },
            uProj:          { value: new THREE.Matrix4() }
        };

        this.setValues({
            uniforms: uniforms,
            vertexShader: `
                precision highp float;
                precision highp int;

                attribute vec3 position;
                attribute vec2 uv;

                uniform mat4 modelViewMatrix;
                uniform mat4 projectionMatrix;

                varying vec2 vUv;

                void main() {
                    vUv = uv;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,
            fragmentShader: `
                precision highp float;
                precision highp int;

                #define NEIGHBOUR_COUNT 8
                
                uniform sampler2D tDiffuse;
                uniform sampler2D tDepth;
                uniform float screenWidth;
                uniform float screenHeight;
                uniform float edlStrength;
                uniform float radius;
                uniform float opacity;
                uniform float uNear;
                uniform float uFar;
                uniform vec2 neighbours[NEIGHBOUR_COUNT];
                uniform mat4 uProj;
                
                varying vec2 vUv;

                float linearizeDepth(float depth) {
                    float z_n = 2.0 * depth - 1.0;
                    return 2.0 * uNear * uFar / (uFar + uNear - z_n * (uFar - uNear));
                }

                void main() {
                    vec4 color = texture2D(tDiffuse, vUv);
                    
                    float depth = texture2D(tDepth, vUv).r;
                    depth = linearizeDepth(depth);

                    if (depth >= 0.999999) {
                        discard;
                    }

                    float sum = 0.0;
                    vec2 pixelSize = vec2(1.0 / screenWidth, 1.0 / screenHeight);

                    for (int i = 0; i < NEIGHBOUR_COUNT; i++) {
                        vec2 offset = neighbours[i] * radius * pixelSize;
                        float neighbourDepth = texture2D(tDepth, vUv + offset).r;
                        neighbourDepth = linearizeDepth(neighbourDepth);

                        float diff = depth - neighbourDepth;
                        float weight = diff > 0.0 ? 1.0 : 0.0;
                        
                        sum += weight * (1.0 - exp(-2.0 * diff * edlStrength));
                    }

                    float ao = sum / float(NEIGHBOUR_COUNT);
                    float intensity = 1.0 - ao;

                    gl_FragColor = vec4(color.rgb * intensity, opacity);
                }
            `,
            transparent: true,
            lights: false
        });
    }
}

export { EyeDomeLightingMaterial };