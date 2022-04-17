import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";
import logger from "morgan";
import { routes } from "./routes";

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

export { httpServer, io };
