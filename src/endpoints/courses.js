module.exports.get = (request, response) => {
  response.json({
    courses: ["angular", "react"],
  });
};

// module.exports.post = (request, response) => {
//   response.json({
//     courses: ["angular", "react"],
//   });
// };
