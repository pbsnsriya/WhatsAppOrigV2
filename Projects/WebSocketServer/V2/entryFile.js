import { WebSocketServer } from 'ws';
import { StartFunc as CommoninsertToClients } from './insertToClients.js';
import { StartFunc as CommonOnMessage } from "./OnMessage/EntryFile.js";
import { ReadFunc as ReadFuncFromConnectedClients } from "../../../CommonExpose/connectedClients.js";
import { InsertFunc as InsertFuncFromChatLog } from "../../../CommonExpose/chatLog.js";

let wss;

const clients = ReadFuncFromConnectedClients();
const CommonChatLog = [];

let StartFunc = (server) => {
    wss = new WebSocketServer({ server });

    wss.on("connection", WsOnConnection);
};

let WsOnConnection = (ws, req) => {
    let LocalIpAddress = req.headers["x-forwarded-for"];

    if ("cookie" in req.headers) {
        let LocalCookieValue = req.headers["cookie"].split(";");
        console.log("LocalCookieValue : ", LocalCookieValue);
    };

    CommoninsertToClients({
        inClients: clients,
        ws,
        inIpAddress: LocalIpAddress
    });

    let localWebSocketData = clients.get(ws);

    const LocalFuncSendMessage = ({ inMessage, inTypeJson = false }) => {
        const LocalMessageCopy = { ...inMessage };

        InsertFuncFromChatLog({ id: localWebSocketData.id, data: LocalMessageCopy, InOut: "Out" });

        if (inTypeJson) {
            ws.send(JSON.stringify(inMessage));
        } else {
            ws.send(inMessage);
        };
    };

    LocalFuncSendMessage({
        inMessage: { Type: 'IsStudent', webSocketId: localWebSocketData.id },
        inTypeJson: true
    });

    ws.on('message', (data, isBinary) => {
        // CommonChatLog.push({ id: localWebSocketData.id, data, InOut: "In" });
        // InsertFuncFromChatLog({ id: localWebSocketData.id, data, InOut: "In" });

        CommonOnMessage({
            inData: data,
            inws: ws,
            inClients: clients,
            inWss: wss,
            inChatLog: CommonChatLog,
            inSendFunc: LocalFuncSendMessage
        });
    });

    ws.on('close', () => {
        // wss.clients.forEach((client) => {
        //     if (client !== ws && client.readyState === WebSocket.OPEN) {
        //       client.send(JSON.stringify({ type: 'user offline', userId: localWebSocketData.id })); // Customize message, extract user ID from URL
        //     }
        // });
        clients.delete(ws);
        console.log("Number of users online: ", clients.size);
    });

    ws.send(Date.now());
};

export { StartFunc };