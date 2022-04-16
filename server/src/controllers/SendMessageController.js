const { SendMessageService } = require("../services/SendMessageService");

class SendMessageController {
  async handle(req, res) {
    const { text } = req.body;
    const service = new SendMessageService();

    const result = await service.execute(text);

    return res.status(201).json(result);
  }
}

module.exports = { SendMessageController };
