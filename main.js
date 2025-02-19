import COPCViewer from "./lib/copc-loader.js";

const url =
    "https://public-aco-data.s3.us-east-1.amazonaws.com/data/4012_PlaceGlacier/23_4012_07/23_4012_07_PlaceGlacier_LASER_WGS84_UTM10_Ellips.copc.laz";

async function main() {
  console.log("Starting main function");

  // Initialize performance monitoring
  const viewer = new COPCViewer("#app", url);
}

main();
