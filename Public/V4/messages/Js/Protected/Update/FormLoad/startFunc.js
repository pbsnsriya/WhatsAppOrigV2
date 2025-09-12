import { StartFunc as StartFuncAddListeners } from "./AddListeners/startFunc.js";
import { StartFunc as StartFuncRowDataFromGet } from "./RowDataFromGet/Entry.js";

const StartFunc = async () => {
    StartFuncAddListeners();
    StartFuncRowDataFromGet();
};

export { StartFunc };
