import { StartFunc as StartFuncFromFetchFromFuncs } from "./FetchFromFuncs/entryFile.js";

let StartFunc = async () => {
    StartFuncFromFetchFromFuncs().then((inData) => { });
};

export { StartFunc };