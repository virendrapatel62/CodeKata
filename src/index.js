const { Worker } = require("worker_threads");
const path = require("path");
// require("./loop");

new Worker(path.join(__dirname, "loop.js"), {
  workerData: {
    name: "Virendra",
  },
});
