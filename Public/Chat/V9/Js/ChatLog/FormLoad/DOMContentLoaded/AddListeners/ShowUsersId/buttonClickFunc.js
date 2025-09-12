const StartFunc = () => {
    console.log("webSocket",webSocket);
    webSocket.send("returnOnlineClients");
};

export { StartFunc };