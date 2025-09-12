let StartFunc = (event) => {
    event.currentTarget.send("returnOnlineClients");

    event.currentTarget.send("GetWebSocketId");

    event.currentTarget.send("myChat");
};

export { StartFunc };