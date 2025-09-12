import { ReturnCopyFunc } from "../../../../../CommonExpose/chatLog.js";

let StartFunc = ({ inws, inClients }) => {
    let LocalSendObject = inClients.get(inws);
    const LocalChatLog = ReturnCopyFunc();

    let LocalMyChat = LocalChatLog.filter(element => {
        return element.id === LocalSendObject.id
    });

    inws.send(JSON.stringify({
        Type: 'myChat',
        ChatLog: LocalMyChat
    }));
};

export { StartFunc };