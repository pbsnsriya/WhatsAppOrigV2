const StartFunc = ({ inDataAsString, inSendFunc }) => {
    console.log("inDataAsString : ", inDataAsString);

    switch (inDataAsString) {
        case "Hai":
        case "hai":
        case "hi":
        case "Hi":
            inSendFunc({ inMessage: "Hello" });

            break;
        case "ping":
        case "Ping":
        case " Ping":
        case " ping":
            inSendFunc({ inMessage: "Pong" });

            break;
        case "I am a Student":
            inSendFunc({ inMessage: "Good to hear that, your good Name?" });

            break;
        default:
            break;
    };
};

export { StartFunc };