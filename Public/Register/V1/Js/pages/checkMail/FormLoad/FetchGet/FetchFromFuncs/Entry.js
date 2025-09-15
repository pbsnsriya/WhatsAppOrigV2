import { StartFunc as StartFuncFetchFuncs } from "./PostFetch.js";
import { StartFunc as CheckFunc } from "./CheckFunc.js";
import { StartFunc as StartFuncAfterFetch } from "./AfterFetch/EntryFile.js";

let StartFunc = async () => {
    let jVarLocalFromCheck = CheckFunc();

    if (jVarLocalFromCheck) {
        let jVarLocalFromFetch = await StartFuncFetchFuncs();

        if (jVarLocalFromFetch.status === 200) {
            let jVarLocalFetchData = await jVarLocalFromFetch.json();
            StartFuncAfterFetch({ inFetchData: jVarLocalFetchData });
        };
    };
};

export { StartFunc }