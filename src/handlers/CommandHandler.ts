import fs from "fs";
import * as path from "path";
import { TCommand } from "../types";

const commandsPath = path.join(__dirname, "..", "commands");

class CommandHandler {
  public commands: Record<string, TCommand<any, any>>;

  constructor() {
    this.commands = {};
  }

  getCommand(commandName: string): TCommand<any, any> {
    return this.commands[commandName];
  }

  setCommand(commandName: string, command: TCommand<any, any>) {
    this.commands[commandName] = command;
  }

  getAvailableCommands() {
    return Object.keys(this.commands)
      .map((command) => `!${command}`)
      .join("\n");
  }

  initializeCommands() {
    fs.readdir(commandsPath, (err, files) => {
      if (err) {
        return console.error(err);
      }

      files.forEach((file) => {
        if (!file.endsWith(".js") || file.includes("index")) {
          return;
        }

        const command = require(`${commandsPath}/${file}`);
        const commandName = file.split(".")[0];

        this.setCommand(commandName, command);
      });
      console.log("Sucessfully initialized commands");
    });
  }
}

export const commandHandler = new CommandHandler();
