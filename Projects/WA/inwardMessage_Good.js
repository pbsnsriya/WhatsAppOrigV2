import { JSONFilePreset } from 'lowdb/node'

import Whatsapp from 'whatsapp-web.js';
const { MessageMedia } = Whatsapp;

import { getClientInfo } from "../CommonExpose/clientInfo.js";
import { StartFunc as StartFuncFromInsertToFile } from "./insertToFile.js";

const StartFunc = async msg => {
    const defaultData = [];
    const LocalFromNumber = msg.from;
    const timestamp = msg.timestamp;

    await StartFuncFromInsertToFile({
        inFrom: LocalFromNumber,
        inMessage: msg.body,
        inTimeStamp: timestamp
    });

    const LocalNumbersData = await JSONFilePreset('Data/mobiles.json', defaultData);

    const date = new Date(timestamp * 1000); // Multiply by 1000 to convert to milliseconds
    const formattedDate = date.toLocaleString(); // Or use a different format as needed

    // console.log("formattedDate : ", formattedDate);

    if (LocalFromNumber in LocalNumbersData.data) {
        const LocalClientInfo = getClientInfo();

        LocalClientInfo.sendMessage(msg.from, LocalNumbersData.data[LocalFromNumber]).then(PromiseData => {
        });
    } else {
        if (msg.body === "ping") {
            msg.reply('pong');
        };

        if (msg.body === "hi") {
            msg.reply('Greetings from KeshavSoft');
        };

        if (msg.body === "Button") {
            const LocalClientInfo = getClientInfo();
            // console.log("msg.from : ", msg.from);

            LocalClientInfo.sendMessage(msg.from, "Send Button").then(PromiseData => {
            });
            // msg.send('send button');
        };

        if (msg.body === "SendMedia") {
            const media = MessageMedia.fromFilePath('./WA/path/to/Keshav.png');
            await msg.reply(media);
        };

        if (msg.body === "SendFromUrl") {
            const LocalMediaUrl = "https://washtex5.keshavsoft.com/assets/image%20(1)-Bo3S5UVn.png";

            const media = await MessageMedia.fromUrl(LocalMediaUrl);
            await msg.reply(media);
        };
    };
};

const LocalFuncFetchData = async (inNumber) => {
    const LocalUrl = `https://join.keshavsoft.biz/binV4/StudentNames/Search?Mobile=${inNumber}`;

    const response = await fetch(LocalUrl);
    const data = await response.json();
    return data;
};

export { StartFunc };