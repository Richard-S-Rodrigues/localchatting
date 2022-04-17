import { SendMessageService } from "../services/SendMessageService";

class SendMessageController {
  async handle(req, res) {
    const { text } = req.body;
    const service = new SendMessageService();

    try {
      const result = await service.execute(text);

      return res.status(201).json(result);
    } catch (err) {
      console.log("Error: ", err);
      return res.status(400).json({ error: err.message });
    }
  }
}

export { SendMessageController };
