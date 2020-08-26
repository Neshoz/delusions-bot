import { Message } from "discord.js";

export const isMessageSentInChannel = (
  message: Message,
  channelName: string
) => {
  const channel = message.guild.channels.get(message.channel.id);
  return channel && channel.name === channelName;
};
