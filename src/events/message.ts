import { getCommandAndArgs } from "../util";
import { Message } from "discord.js";
import { config } from "../config";
import { commandHandler } from "../handlers";

export const message = (message: Message) => {
  if (message.author.bot) {
    return;
  }

  if (message.content.indexOf(config.prefix) !== 0) {
    return;
  }

  const { command, args } = getCommandAndArgs(message);
  const cmd = commandHandler.getCommand(command);

  if (!cmd) {
    return message.channel.send("Command not found");
  }

  cmd(message, args);
};
