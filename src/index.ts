import dotenv from "dotenv";
dotenv.config();

import Discord from "discord.js";

import messageCreate from "./events/messageCreate";

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

client.on("ready", () => {
  console.log(`${client.user?.tag} is serving ${client.guilds.cache.size} guilds`);
});

client.on("messageCreate", (message) => {
  messageCreate(client, message);
});

client.login(process.env["DISCORD_TOKEN"]);
