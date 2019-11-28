const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config");

const message = require("./src/events/message");
const pong = require("./src/commands/pong");
const absence = require("./src/commands/absence");

const events = {
  message
};

const commands = {
  pong,
  absence
};

const init = guildClient => {
  guildClient.config = config;
  guildClient.commands = commands;

  // Loop through each event and attach the event itself to be called when that event occurs
  // Passing the client along as an argument to the function.
  // Essentially we create a new function with the same function body as the original function,
  // but we pass the guildClient as the first argument.
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
