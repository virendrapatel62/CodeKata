const {
  Worker,
  isMainThread,
  threadId,
  workerData,
} = require("worker_threads");

var timeout = 200;
new Array(10)
  .fill()
  .map(() => Math.random())
  .forEach((item, index) => {
    setTimeout(() => {
      console.log(item, isMainThread, threadId, workerData);
    }, timeout);
    timeout += 200;
  });
