import Whatsapp from 'whatsapp-web.js';
const { Client, LocalAuth } = Whatsapp;

import qrcode from 'qrcode-terminal';

// import { StartFunc as StartFuncFromInwardMessage } from "./inwardMessage.js";
import { StartFunc as StartFuncFromAuthenticated } from "./authenticated.js";
import { StartFunc as StartFuncFromInwardMessage } from "./SendMessage/entryFile.js";

import { StartFunc as StartFuncFromQrCodeGenerated } from "../../CommonExpose/qrCodeGenerated.js";
import { startFunc as clientInfoFunc } from "../../CommonExpose/clientInfo.js";

const StartFunc = async () => {
    const client = new Client();

    console.log("client : ", client);

    client.on('qr', qr => {
        console.log("qr is generated : ", qr);
        qrcode.generate(qr, { small: true });

        StartFuncFromQrCodeGenerated({ inQrCodeGenerated: qr })
        // res.end(qr);
    });

    client.on('ready', () => {
        console.log('client info :', Object.keys(client), Object.keys(client.info));
        clientInfoFunc({ inClient: client });
    });

    client.on('message', StartFuncFromInwardMessage);
    client.on('authenticated', StartFuncFromAuthenticated);
    client.on('remote_session_saved', () => {
        console.log('remote_session_saved!');
    });

    await client.initialize();
};

export { StartFunc };