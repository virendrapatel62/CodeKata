const axios = require("axios");

const users = axios.get("https://jsonplaceholder.typicode.com/users");
const todos = axios.get("https://jsonplaceholder.typicode.com/todos");
// // responsePromise
// //   .then((response) => console.log(response))
// //   .catch((err) => console.log(err));

Promise.all([users, todos]).then(([userResponse, todosResponse]) => {
  const { data: users } = userResponse;
  const { data: todos } = todosResponse;
  console.log({ users, todos });
});

// async function task() {
//   try {
//     const result = await responsePromise;
//     const nameArray = result.data.map((user) => user.name);
//     console.log(nameArray);
//   } catch (error) {
//     console.log(error);
//   }
// }

// task();

// const getStudents = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(["Virendra", "Anuj"]);
//     }, 3000);
//   });
// };

// getStudents().then(console.log);

// const p = getStudents();
// console.log(p);
// p.then(() => {
//   console.log(p);
// });
