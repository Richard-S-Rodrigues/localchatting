const { Router } = require("express");
const {
  SendMessageController
} = require("./controllers/SendMessageController");

const routes = Router();

routes.post("/messages", new SendMessageController().handle);

module.exports = { routes };
