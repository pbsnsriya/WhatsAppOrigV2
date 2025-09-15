import { StartFunc as StartFuncFromWA } from "../../../../WaV1/signOut.js";

let StartFunc = ({ inws }) => {
    StartFuncFromWA();
    inws.send("StopWADone");
};

export { StartFunc };