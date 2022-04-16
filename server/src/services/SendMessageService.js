const { io } = require("../app");

class SendMessageService {
  async execute(text) {
    io.emit("new_message", { text });

    return text;
  }
}

module.exports = { SendMessageService };
