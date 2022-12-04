const express = require("express");
const fs = require("fs/promises");
const path = require("path");
const app = express();

fs.readdir(path.join(__dirname, "endpoints")).then((paths) => {
  paths.forEach((filename) => {
    if (filename === "index.js") {
      const handlers = require(path.join(__dirname, "endpoints", filename));
      const { get, post } = handlers;
      app.get("/", get);
      app.post("/", post);
      return;
    }

    const handlers = require(path.join(__dirname, "endpoints", filename));
    const { get, post } = handlers;
    const url = filename.split(".")[0];
    get && app.get(`/${url}`, get);
    post && app.post(`/${url}`, post);
  });
});

app.listen(3000, () => {
  console.log("App is running");
});
