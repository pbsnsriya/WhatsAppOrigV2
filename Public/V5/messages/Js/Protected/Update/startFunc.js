import { StartFunc as StartFuncFormLoad } from "./FormLoad/startFunc.js";

const StartFunc = () => {
    let jVarLocalFromAdmin = true;
    if (jVarLocalFromAdmin ) {
        StartFuncFormLoad();
    };
};

StartFunc();