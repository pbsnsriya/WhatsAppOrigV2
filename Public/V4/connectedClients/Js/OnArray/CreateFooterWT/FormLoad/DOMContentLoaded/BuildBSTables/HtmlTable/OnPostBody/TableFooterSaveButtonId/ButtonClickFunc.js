import { StartFunc as StartFuncCheckFunc } from "./CheckFunc.js";
import { StartFunc as StartFuncFetchFromFuncs } from "./FetchFromFuncs/Entry.js";

const StartFunc = (event) => {
    // console.log("aaaaaaaaaaaaa");

    const jVarLocalCurrentTarget = event.currentTarget;

    if (StartFuncCheckFunc()) {
        StartFuncFetchFromFuncs({ inCurrentTarget: jVarLocalCurrentTarget });
    };
};

export { StartFunc }