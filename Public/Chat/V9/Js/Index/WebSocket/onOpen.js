let StartFunc = (event) => {
    event.currentTarget.send("returnOnlineClients");

    event.currentTarget.send("GetWebSocketId");
};

export { StartFunc };