const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const logger = require("morgan");
const { routes } = require("./routes");

const app = express();

app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(routes);

const httpServer = createServer(app);
const io = new Server(httpServer, { cors: { origin: "*" } });

io.on("connection", (socket) => {
  console.log(socket.id);
});

io.on("new_message", (socket) => {
  console.log(socket);
});

module.exports = { httpServer, io };
