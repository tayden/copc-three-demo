import { CopcLoader } from './lib/copc-loader.js';
import * as dat from 'dat.gui';

const url = "https://public-aco-data.s3.amazonaws.com/data/4012_PlaceGlacier/23_4012_08/23_4012_08_PlaceGlacier_LASER_WGS84_UTM10_Ellips.copc.laz";

async function main() {
    const loader = new CopcLoader(url, {
        maxPointsPerNode: 100000,
        pointBudget: 100000,
        pointSize: 0.1,
        showOctree: false
    });

    if (await loader.initialize()) {
        setupGUI(loader);

        const animate = () => {
            requestAnimationFrame(animate);
            loader.renderer.controls.update();
            const frustum = loader.renderer.getCameraFrustum();
            loader.updateVisibleNodes(loader.renderer.camera, frustum);
            loader.renderer.render();
        };

        animate();
    } else {
        console.error("Failed to initialize COPC loader");
    }
}

function setupGUI(loader) {
    const gui = new dat.GUI();

    gui.add(loader.options, 'pointSize', 0.01, 1)
        .onChange(value => loader.updatePointSize(value));

    gui.add(loader.options, 'pointBudget', 10000, 1000000)
        .step(10000)
        .onChange(value => loader.updatePointBudget(value));

    gui.add(loader.options, 'showOctree')
        .onChange(value => loader.updateOctreeVisibility(value));
}

main();