import { getClientInfo } from "../../../../../CommonExpose/clientInfo.js";
import { InsertFunc as InsertFuncFromForWA, CheckLastEntry } from "../../../../../CommonExpose/forWA.js";

let StartFunc = ({ inws, inDataAsJson }) => {
    const toWs = inws;
    // console.log("---------- : ", inDataAsJson);

    const LocalTimeLapseTF = CheckLastEntry();

    if (LocalTimeLapseTF) {
        const LocalClientInfo = getClientInfo();

        LocalClientInfo.sendMessage(`91${inDataAsJson.ToNumber}` + "@c.us", inDataAsJson.ToMessage).then(PromiseData => {
            InsertFuncFromForWA({ inValueToInsert: inDataAsJson });

            toWs.send(JSON.stringify({
                Type: 'ChatACK',
                ChatLog: inDataAsJson
            }));
        });
    } else {
        toWs.send(JSON.stringify({
            Type: 'WaSendFail',
            ChatLog: "time"
        }));
    };
};

export { StartFunc };