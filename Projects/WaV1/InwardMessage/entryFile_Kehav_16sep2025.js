import { StartFunc as StartFuncFromInsertToFile } from "../insertToFile.js";

const StartFunc = async msg => {
    // StartFuncFromInsertToFile({ inMessage, inFrom, inTimeStamp });

    const LocalFromNumber = msg.from;
    const timestamp = msg.timestamp;

    await StartFuncFromInsertToFile({
        inFrom: LocalFromNumber,
        inMessage: msg,
        inTimeStamp: timestamp
    });
    // console.log("aaaaaaaaaaa : ", msg);
};

export { StartFunc };
