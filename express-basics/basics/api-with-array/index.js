const express = require("express");
const app = express();
const users = [];
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
  response.json({
    users,
  });
});

app.post("/api/user", (request, response) => {
  const user = request.body;

  if (!user.name || !user.age) {
    return response.status(400).json({
      message: "name and age required.",
    });
  }

  user.id = Date.now();

  users.push(user);

  response.status(201).json(user);
});

app.put("/api/user/:userId", (request, response) => {
  const { userId } = request.params;
  const body = request.body;

  const user = users.find((user) => user.id == userId);

  if (!user) {
    return response.status(404).send();
  }

  Object.assign(user, body);
  // user.name = body.name;
  // user.age = body.age;
  response.json({
    user,
  });
});

app.delete("/api/user/:userId", (request, response) => {
  const { userId } = request.params;
  const index = users.findIndex((user) => user.id === +userId);

  if (index < 0) {
    return response.status(404).send();
  }

  users.splice(index, 1);
  response.status(204).send();
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
