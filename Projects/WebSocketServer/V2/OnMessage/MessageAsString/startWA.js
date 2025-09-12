import { StartFunc as StartFuncFromWA } from "../../../../WA/entryFile.js";

let StartFunc = async () => {
    await StartFuncFromWA();
};

export { StartFunc };