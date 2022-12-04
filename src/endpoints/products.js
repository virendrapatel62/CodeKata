module.exports.get = (request, response) => {
  response.json({
    courses: ["Map pro", "Dell"],
  });
};

// module.exports.post = (request, response) => {
//   response.json({
//     courses: ["angular", "react"],
//   });
// };
