import fs from "fs";
import { getClientInfo } from "../../CommonExpose/clientInfo.js";
import { JSONFilePreset } from 'lowdb/node'

const StartFunc = async ({ inFromNumber }) => {
    let LocalClient = getClientInfo();
    const defaultData = { posts: [], oldChats: [] };

    const chats = await LocalClient.getChats();
    const LocalFromNumber = inFromNumber;
    const targetSenderId = `91${LocalFromNumber}@c.us`; // Example: Replace with the sender's WhatsApp ID
    const targetChat = chats.find(chat => chat.id._serialized === targetSenderId);

    if (targetChat) {
        const messages = await targetChat.fetchMessages({ limit: 2 }); // Fetches all messages in the chat
        console.log(messages);

        const db = await JSONFilePreset(`Data/91${LocalFromNumber}@c.json`, defaultData);

        await db.update(({ oldChats }) => oldChats.push(...messages));
    } else {
        console.log("Chat not found.");
    };
};

export { StartFunc };