const express = require("express");
const axios = require("axios");
const { saveUsers, getAllUsers } = require("./data/user");
const { response } = require("express");
const app = express();
const jsonParser = express.json();

app.use(jsonParser);

app.get("/ping", (requst, response) => {
  response.send("pong");
});

app.get("/", (request, response) => {
  console.log("Request Recieved...");
  const message = {
    message: "Api is working..",
  };
  response.json(message);
});

app.get("/api/users", (request, response) => {
  getAllUsers().then((users) => {
    response.json({
      users,
    });
  });
});

app.post("/api/user", async (request, response) => {
  const user = request.body;

  if (!user.name || !user.age) {
    return response.status(400).json({
      message: "name and age required.",
    });
  }

  const users = await getAllUsers();
  user.id = Date.now();
  users.push(user);
  saveUsers(users);

  response.status(201).json(user);
});

const userParamValidator = async (request, response, next) => {
  const { userId } = request.params;
  const users = await getAllUsers();
  const index = users.findIndex((user) => user.id == userId);

  if (index < 0) {
    return response.status(404).send();
  }
  request.user = users[index];
  request.userIndex = index;

  next();
};

app.param("userId", userParamValidator);

app.get("/api/user/:userId", async (request, response) => {
  console.log(request.user);
  const user = request.user;
  response.json({
    user,
  });
});

app.put("/api/user/:userId", async (request, response) => {
  const user = request.user;
  const index = request.userIndex;
  const body = request.body;
  const users = await getAllUsers();

  Object.assign(user, body);
  users[index] = user;
  saveUsers(users);
  // user.name = body.name;
  // user.age = body.age;
  response.json({
    user,
  });
});

app.delete("/api/user/:userId", async (request, response) => {
  const index = request.userIndex;
  const users = await getAllUsers();
  users.splice(index, 1);
  saveUsers(users);
  response.status(204).send();
});

app.get("/api/courses", (request, response) => {
  const url = "https://dummyjson.com/products?id=1";

  axios.get(url).then((axiosResponse) => {
    const data = axiosResponse.data;
    response.json({
      courses: data,
    });
  });
});

app.all("*", (_, response) => {
  // response.status(404).send(`<h1 style='color:tomato'>Page Not Found</h1>`);
  response.status(404).json({
    error: 404,
    message: "endpint not found",
  });
});

app.listen(3000, () => {
  console.log("App is ready");
  console.log("Open localhost:3000");
});
