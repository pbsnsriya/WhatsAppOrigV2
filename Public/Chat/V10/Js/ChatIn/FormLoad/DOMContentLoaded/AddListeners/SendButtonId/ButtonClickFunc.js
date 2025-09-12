let StartFunc = () => {
    const jVarLocalToSend = jFLocalToSendMessageId();
    webSocket.send(jVarLocalToSend);
};

let jFLocalToSendMessageId = () => {
    let jVarLocalToSendMessageId = 'ToSendMessageId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalToSendMessageId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

export { StartFunc };