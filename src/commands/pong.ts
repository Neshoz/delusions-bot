export const pong = (client: any, message: any, args: any) => {
  message.channel.send("pong!").catch(console.error);
};
