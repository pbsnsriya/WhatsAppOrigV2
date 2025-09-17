import { StartFunc as StartFuncFetchFuncs } from "./postFetch.js";
import { StartFunc as StartFuncAfterFetch } from "./AfterFetch/entryFile.js";

let StartFunc = async ({ inRowKey }) => {
    let jVarLocalFetchResponse = await StartFuncFetchFuncs({ inRowKey });

    if (jVarLocalFetchResponse.status === 200) {
        StartFuncAfterFetch();
    };
};

export { StartFunc }