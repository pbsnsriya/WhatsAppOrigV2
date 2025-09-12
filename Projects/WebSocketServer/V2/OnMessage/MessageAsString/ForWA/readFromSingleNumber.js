import { StartFunc as StartFuncFromWA } from "../../../../../WA/readChatsFromNumber.js";

let StartFunc = ({ inws, inFromNumber }) => {
    StartFuncFromWA({ inFromNumber }).then();
    inws.send("WAReadFromSingleNumber");
};

export { StartFunc };