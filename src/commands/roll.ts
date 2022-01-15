import { Client, Message } from "discord.js";
import randomInteger from "../util/randomInteger";

export default async function roll(client: Client, message: Message, args: string[]) {
  const numMin = parseInt(args[0] ?? "1", 10);
  const numMax = parseInt(args[1] ?? "6", 10);

  message.reply({ content: `${randomInteger(numMin, numMax)}` });
}
