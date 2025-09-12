import { StartFunc as CommonMessageAsJson } from "./MessageAsJson/EntryFile.js";
import { StartFunc as CommonMessageAsString } from "./MessageAsString/EntryFile.js";
import { InsertFunc as InsertFuncFromChatLog } from "../../../../CommonExpose/chatLog.js";
import { ReadFunc as ReadFuncFromConnectedClients } from "../../../../CommonExpose/connectedClients.js";

let StartFunc = ({ inData, inws, inClients, inWss, inChatLog, inSendFunc }) => {
    let LocalData = inData;
    // console.log("LocalData : ", LocalData);
    const clients = ReadFuncFromConnectedClients();
    let localWebSocketData = clients.get(inws);

    try {
        let LocalDataAsJson = JSON.parse(LocalData);

        InsertFuncFromChatLog({ id: localWebSocketData.id, data: LocalDataAsJson, InOut: "In" });

        CommonMessageAsJson({ inDataAsJson: LocalDataAsJson, inws, inClients, inWss, inChatLog, inSendFunc });

        return;
    } catch (error) {
        // console.log("errr : ", error);
    };

    InsertFuncFromChatLog({ id: localWebSocketData.id, data: LocalData.toString(), InOut: "In" });

    CommonMessageAsString({ inDataAsString: LocalData.toString(), inws, inClients, inChatLog, inSendFunc });
};

export { StartFunc };