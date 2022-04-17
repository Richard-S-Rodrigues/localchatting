import { io } from "../app";

class SendMessageService {
  async execute(text) {
    io.emit("new_message", { text });

    return text;
  }
}

export { SendMessageService };
