import { Message } from "discord.js";
import { config } from "../config";

export const getCommandAndArgs = (message: Message) => {
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);

  return {
    command: args.shift()!.toLowerCase(),
    args,
  };
};
