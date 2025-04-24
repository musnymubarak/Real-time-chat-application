const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");

const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

let messages = [];

io.on("connection", (socket) => {
  console.log("User connected: " + socket.id);

  socket.emit("chatHistory", messages);

  socket.on("sendMessage", (data) => {
    const messageWithTimestamp = {
      ...data,
      timestamp: new Date().toISOString()
    };
    messages.push(messageWithTimestamp);
    io.emit("receiveMessage", messageWithTimestamp);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected: " + socket.id);
  });
});

server.listen(4000, () => {
  console.log("Server listening on port 4000");
});
