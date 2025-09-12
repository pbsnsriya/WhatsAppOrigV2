import { StartFunc as StartFuncFromWA } from "../../../../WA/signOut.js";

let StartFunc = ({ inws }) => {
    StartFuncFromWA();
    inws.send("StopWADone");
};

export { StartFunc };