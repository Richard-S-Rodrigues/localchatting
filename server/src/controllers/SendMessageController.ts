import { Request, Response } from "express";
import { SendMessageService } from "../services/SendMessageService";

class SendMessageController {
  async handle(req: Request, res: Response) {
    const { text } = req.body;
    const service = new SendMessageService();

    try {
      const result = await service.execute(text);

      return res.status(201).json(result);
    } catch (err) {
      let message;

      if (err instanceof Error) {
        message = err.message;
      } else {
        message = String(err);
      }

      console.log("Error: ", message);

      return res.status(400).json({ error: message });
    }
  }
}

export { SendMessageController };
