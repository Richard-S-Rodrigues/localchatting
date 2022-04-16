const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const logger = require("morgan");

const app = express();

app.use(logger("dev"));
app.use(express.json());

const httpServer = createServer(app);
const io = new Server(httpServer, { cors: { origin: "*" } });

io.on("connection", (socket) => {
  console.log(socket.id);
});

module.exports = { httpServer, io };
