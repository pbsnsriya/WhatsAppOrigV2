import { StartFunc as StartFuncAddListeners } from "./AddListeners/StartFunc.js";
import { StartFunc as initialize } from "./initialize.js";

const StartFunc = () => {
    initialize();
    StartFuncAddListeners();
};

export { StartFunc };
