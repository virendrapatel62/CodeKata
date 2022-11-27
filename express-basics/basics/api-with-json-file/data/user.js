const fs = require("fs/promises");
const path = require("path");
const filename = "user.json";
const filePath = path.join(__dirname, filename);

module.exports.saveUsers = (users) => {
  fs.writeFile(filePath, JSON.stringify(users));
};

module.exports.getAllUsers = () => {
  return fs.readFile(filePath).then((json) => {
    return JSON.parse(json);
  });
};
