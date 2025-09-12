import { RetrunInChatOnly } from "../../../../../CommonExpose/chatLog.js";

let StartFunc = ({ inSendFunc }) => {
    const localChatAsJson = RetrunInChatOnly();
    // console.log("localChatAsJson : ", localChatAsJson);

    inSendFunc({ inMessage: { Type: 'ToChatIn', res: localChatAsJson }, inTypeJson: true });
};

export { StartFunc };