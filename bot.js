const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config");

const message = require("./src/events/message");

const pong = require("./src/commands/pong");

const events = {
  message
};

const commands = {
  pong
};

const init = guildClient => {
  guildClient.config = config;
  guildClient.commands = commands;

  Object.entries(events).forEach(([eventName, event]) => {
    guildClient.on(eventName, event.bind(null, guildClient));
  });
};

client.on("ready", () => {
  const guild = client.guilds.find(g => g.name === "Delusions");
  init(guild.client);
  console.log(`Logged in as ${client.user.tag}`);
});

client.login(config.token);
