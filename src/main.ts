import Discord from "discord.js";
import { config } from "./config";
import { initializeEvents } from "./bootstrapping";
import { commandHandler } from "./handlers";

const client = new Discord.Client();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
  const guild = client.guilds.find(({ name }) => name === "Delusions");

  console.log("Initializing events");
  initializeEvents(guild.client);

  console.log("Initializing commands");
  commandHandler.initializeCommands();
});

client.login(config.token);
