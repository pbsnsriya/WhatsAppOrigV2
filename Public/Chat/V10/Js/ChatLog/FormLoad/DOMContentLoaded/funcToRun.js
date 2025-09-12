import { StartFunc as StartFuncFromAddListeners } from "./AddListeners/entryFile.js";

let StartFunc = () => {
    StartFuncFromAddListeners();
};

export { StartFunc };