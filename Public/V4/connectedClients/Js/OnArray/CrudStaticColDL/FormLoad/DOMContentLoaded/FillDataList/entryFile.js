import { StartFunc as StartFuncFromFetchAsGet } from "./FetchAsGet/entryFile.js";

let StartFunc = async () => {
    await StartFuncFromFetchAsGet();

};

export { StartFunc };