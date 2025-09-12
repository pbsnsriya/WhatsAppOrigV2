import { InsertFunc as InsertFuncFromChatLog } from "../../../../../CommonExpose/chatLog.js";

let StartFunc = ({ inDataToClientAsJson, inws, inClients }) => {
    let LocalSendObject = inClients.get(inws);
    let toId = inDataToClientAsJson.toId;
    let toWs = Getws(inClients, toId);

    let LocalObjectToSend = {
        Type: 'sendMessage',
        Message: inDataToClientAsJson.Message,
        toId: toId, fromId: LocalSendObject.id
    };

    InsertFuncFromChatLog({ id: toId, data: LocalObjectToSend, InOut: "In" });

    toWs.send(JSON.stringify(LocalObjectToSend));
};

let Getws = (inClients, toId) => {
    for (let [key, value] of inClients.entries()) {
        if (value.id === toId)
            return key;
    };
};

export { StartFunc };