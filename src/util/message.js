const extractCommandAndArgs = (message, config) => {
  const [command, ...args] = message.content
    .slice(config.prefix.length)
    .trim()
    .split(/ +/g);

  return {
    command: command.toLowerCase(),
    args
  };
};

module.exports = {
  extractCommandAndArgs
};
