import { LowSync } from "lowdb";
import { JSONFileSync } from "lowdb/node";

const StartFunc = async (msg) => {
  const messageBody = msg.body;

  try {
    const response = responser(messageBody);
    // Send the response
    msg.reply(response);
  } catch (error) {
    console.error("Error reading messages.json:", error);
    await msg.reply("Sorry, there was an error processing your request.");
  }
};

const responser = (messageBody) => {
  // Path is relative to this file: Projects/WA/SendMessage/ifNotInMobiles.js
  const db = new LowSync(new JSONFileSync("Data/messages.json"), {});
  db.read();
  const key = messageBody.trim();
  const responses = db.data || {};
  if (responses[key]) {
    return responses[key];
  }
  return "What else can I help you with?";
};

export { StartFunc };