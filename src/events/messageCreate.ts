import { Client, Message } from "discord.js";

import roll from "../commands/roll";

const prefix = process.env["PREFIX"] ?? "=";

export default async function messageCreate(client: Client, message: Message) {
  if (!message.guild) return;
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const commandName = args.shift()?.toLowerCase();
  if (!commandName) return;

  switch (commandName) {
    case "roll":
      roll(client, message, args);
      break;
  }
}
