import fs from "fs";
import * as path from "path";
import { Client } from "discord.js";

const eventsPath = path.join(__dirname, "..", "events");

export const initializeEvents = (client: Client) => {
  fs.readdir(eventsPath, (err, files) => {
    if (err) {
      return console.error(err);
    }

    files.forEach((file) => {
      if (!file.endsWith(".ts") || file.includes("index")) {
        return;
      }

      const event = require(`${eventsPath}/${file}`);
      const eventName = file.split(".")[0];

      client.on(eventName, event);
    });
    console.log("Sucessfully initialized events");
  });
};
