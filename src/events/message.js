const { extractCommandAndArgs } = require("../util/message");

module.exports = (client, message) => {
  if (message.author.bot) {
    return;
  }

  if (message.content.indexOf(client.config.prefix) !== 0) {
    return;
  }

  const { command, args } = extractCommandAndArgs(message, client.config);

  const cmd = client.commands[command];

  if (!cmd) {
    return message.channel.send("Command not found");
  }

  cmd(client, message, args);
};
