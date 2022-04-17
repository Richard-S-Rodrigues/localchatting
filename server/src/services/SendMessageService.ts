import { io } from "../app";

class SendMessageService {
  async execute(text: string) {
    io.emit("new_message", { text });

    return text;
  }
}

export { SendMessageService };
