import { LowSync } from "lowdb";
import { JSONFileSync } from "lowdb/node";

const StartFunc = async (msg) => {

    const LocalfromNumber = msg.from;
    const LocalMessageBody = msg.body;
    const response = responser({ inFromNumber: LocalfromNumber, inMessageBody: LocalMessageBody });
    msg.reply(response);

};

const responser = ({ inMessageBody, inFromNumber }) => {
    const LocalfromNumber = inFromNumber;
    const LocalMessageBody = inMessageBody;
    // Path is relative to this file: Projects/WA/SendMessage/ifNotInMobiles.js
    const db = new LowSync(new JSONFileSync("Data/mobiles.json"), {});
    db.read();
    const responses = db.data || {};
    if (LocalfromNumber in responses) {
        const userData = responses[LocalfromNumber];
        if (typeof userData === "object") {
            return userData[LocalMessageBody];
        }
        return userData;
    }
    return "What else can I help you with?";
};
export { StartFunc };