import { Router } from "express";
import { SendMessageController } from "./controllers/SendMessageController";

const routes = Router();

routes.post("/messages", new SendMessageController().handle);

export { routes };
