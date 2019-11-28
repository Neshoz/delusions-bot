const absence = {};

module.exports = (client, message, args) => {
  console.log("author", message.author.id);
  console.log("args", args.join(" "));

  if (!absence[message.author.id]) {
    absence[message.author.id] = [];
  }

  absence[message.author.id].push({
    date: Date.now(),
    reason: args.join(" ")
  });
};
