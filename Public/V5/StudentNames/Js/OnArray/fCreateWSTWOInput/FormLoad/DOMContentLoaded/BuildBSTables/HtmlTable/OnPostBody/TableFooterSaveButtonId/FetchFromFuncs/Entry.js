import { StartFunc as StartFuncFetchFuncs } from "./PostFetch.js";
import { StartFunc as StartFuncAfterFetch } from "./AfterFetch/EntryFile.js";

let StartFunc = async ({ inCurrentTarget }) => {
    let jVarLocalDataNeeded = await StartFuncFetchFuncs({ inCurrentTarget });

    if (jVarLocalDataNeeded.status === 200) {
        StartFuncAfterFetch();
    };
};

export { StartFunc }