import { StartFunc as StartFuncFromWA } from "../../../../WaV1/entryFile.js";

let StartFunc = async () => {
    await StartFuncFromWA();
};

export { StartFunc };