import { StartFunc as StartFuncFetchAsGet } from "./FetchAsGet/entryFile.js";

let StartFunc = async () => {
    StartFuncFetchAsGet().then((inData) => { });
};

export { StartFunc };