import { Client, Message } from "discord.js";
import randomInteger from "../util/randomInteger";

export default async function roll(client: Client, message: Message, args: string[]) {
  message.reply({ content: `${randomInteger(1, 6)}` });
}
