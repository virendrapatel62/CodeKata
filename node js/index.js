const fs = require("fs");
const path = require("path");

console.log(path.join(__dirname, "../"));

// console.log(__dirname);
// console.log(__filename);

fs.readdir(path.join(__dirname, "../"), (error, files) => {
  console.log(error, files);
});
