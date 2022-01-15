import { Client, Message } from "discord.js";
import randomInteger from "../util/randomInteger";

export default async function roll(client: Client, message: Message, args: string[]) {
  let num1;
  let num2;

  if (args.length === 0) {
    num1 = 1;
    num2 = 6;
  } else if (args.length === 1) {
    num1 = 1;
    num2 = parseInt(args[0] ?? "6", 10);
    if (isNaN(num2)) num2 = 6;
  } else {
    num1 = parseInt(args[0] ?? "1", 10);
    num2 = parseInt(args[1] ?? "6", 10);
    if (isNaN(num1)) num1 = 1;
    if (isNaN(num2)) num2 = 6;
  }

  let min = num1;
  let max = num2;

  if (min > max) {
    min = num2;
    max = num1;
  }

  message.reply({ content: `${randomInteger(min, max)}` });
}
