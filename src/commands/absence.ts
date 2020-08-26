import { Message, RichEmbed } from "discord.js";
import { TCommand } from "../types";
import { isMessageSentInChannel } from "../util";

export const absence: TCommand<Message, any[]> = (message, args) => {
  if (!isMessageSentInChannel(message, "absence")) {
    message.delete();
    message.member.createDM().then((dm) => {
      dm.sendEmbed(new RichEmbed({}));
    });
  }
};
