const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");

const io = new Server(server);

app.get("/", (req, res) => {
  res.sendFile(process.cwd() + "/index.html");
});

app.get("/chat", (req, res) => {
  res.sendFile(process.cwd() + "/chat.html");
});

const onlineUsers = {};

io.on("connection", (socket) => {
  //   homepageSocket(socket);
  console.log("User connected.. ✅");
  socket.on("message", (data) => {
    const { to, message } = JSON.parse(data);
    const myUserObject = onlineUsers[socket.id];
    const room = [myUserObject.id, to.id].sort().join("");
    console.log(socket.rooms);

    socket.to(room).emit("message-recieve", message);
  });

  socket.on("login", (data) => {
    const user = JSON.parse(data);
    onlineUsers[socket.id] = user;
    socket.broadcast.emit("new-active-user", user);
    socket.emit("active-users", Object.values(onlineUsers));
  });
  socket.on("disconnect", () => {
    console.log("Disconnected...");
    socket.broadcast.emit("inactive-user", onlineUsers[socket.id]);
    delete onlineUsers[socket.id];
  });

  socket.on("open-chat", ({ username, id }, callback) => {
    const myUserObject = onlineUsers[socket.id];
    const room = [myUserObject.id, id].sort().join("");
    socket.join(room);
  });
});
function homepageSocket(socket) {
  console.log("user connected ✅", { id: socket.id });
  emitTime(socket);

  socket.on("message", (data) => {
    socket.broadcast.emit("message", data);
  });

  socket.on("typing-start", (data) => {
    socket.broadcast.emit("typing-start", data);
  });
  socket.on("typing-stop", (data) => {
    socket.broadcast.emit("typing-stop");
  });

  socket.on("disconnect", () => {
    console.log("user disconnected ❌");
  });
}

server.listen(3000, () => {
  console.log("listening on *:3000");
});

function emitTime(socket) {
  setInterval(() => {
    socket.emit("time", {
      time: new Date().toLocaleTimeString(),
    });
  }, 1000);
}

process.on("unhandledRejection", () => {});
