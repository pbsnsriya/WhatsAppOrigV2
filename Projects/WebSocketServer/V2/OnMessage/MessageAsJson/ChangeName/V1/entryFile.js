import WebSocket from 'ws';

let StartFunc = ({ inClients, inws, inWss, inDataAsJson }) => {
    let LocalArray = []
    let LocalDataAsJson = inDataAsJson;
    LocalFuncChangeNameInClients({ inClients, inws, inName: LocalDataAsJson.Message });
    for (let [key, value] of inClients) {
        LocalArray.push(value);
    };

    // inws.send(JSON.stringify({ Type: 'returnOnlineClients', res: LocalArray }));
    LocalFuncToAllClients({ inDataAsJson: LocalArray, inws, inWss });
    //     inSendFunc({ inMessage: { Type: 'returnOnlineClients', res: LocalArray }, inTypeJson: true });
};

let LocalFuncToAllClients = ({ inDataAsJson, inWss }) => {
    inWss.clients.forEach((client) => {
        // console.log("1111111 : ",client.readyState);
        if (client.readyState === WebSocket.OPEN) {
            // console.log("client : ",inDataAsJson);
            // client.send(JSON.stringify(inDataAsJson));

            client.send(JSON.stringify({ Type: 'returnOnlineClients', res: inDataAsJson }));

            // inSendFunc({ inMessage: { Type: 'returnOnlineClients', res: LocalArray }, inTypeJson: true });

        };
    });
};

let LocalFuncChangeNameInClients = ({ inClients, inws, inName }) => {
    let LocalChangedObject = inClients.get(inws);
    LocalChangedObject.Name = inName;
};


export { StartFunc };
