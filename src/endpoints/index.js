module.exports.get = (request, response) => {
  console.log("Get Reques");

  response.json({ Message: "Hello World.." });
};
module.exports.post = (request, response) => {
  console.log("POSt Reques");

  response.json({ Message: "Hello World.." });
};
