import { StartFunc as StartFuncFromWA } from "../../../../WA/readAllChats.js";

let StartFunc = ({ inws }) => {
    StartFuncFromWA().then();
    inws.send("WAReadAllChats");
};

export { StartFunc };