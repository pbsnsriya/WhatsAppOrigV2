let StartFunc_old_10dep2025 = () => {
    const jVarLocalToSend = jFLocalToSendMessageId();
    webSocket.send(jVarLocalToSend);
};

let StartFunc = () => {
    const jVarLocalCurrentTarget = event.currentTarget;
    const jVarLocalWebSocketId = jVarLocalCurrentTarget.dataset.websocketid;

    let jVarLocalSendObject = {};

    jVarLocalSendObject.Type = "sendMessage";
    jVarLocalSendObject.Message = jFLocalToSendMessageId();
    jVarLocalSendObject.toId = jVarLocalWebSocketId;

    webSocket.send(JSON.stringify(jVarLocalSendObject));
};

let jFLocalToSendMessageId = () => {
    let jVarLocalToSendMessageId = 'ToSendMessageId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalToSendMessageId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

export { StartFunc };