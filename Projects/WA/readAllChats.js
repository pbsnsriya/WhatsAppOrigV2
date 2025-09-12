import fs from "fs";
import { getClientInfo } from "../../CommonExpose/clientInfo.js";

const StartFunc = async () => {
    let LocalClient = getClientInfo();

    const chats = await LocalClient.getChats();
    const LocalDataPath = "Data";
    const LocalFileName = "chats";

    try {
        fs.writeFileSync(`${LocalDataPath}/${LocalFileName}.json`, JSON.stringify(chats), { flag: 'wx' });
    } catch (err) {
        if (err.code === 'EEXIST') {
            console.log('File already exists.');
        } else {
            console.error('Error creating file:', err);
        }
    };
};

export { StartFunc };