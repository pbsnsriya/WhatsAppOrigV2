import { StartFunc as StartFuncFromAddListeners } from "./AddListeners/entryFile.js";
// import { StartFunc as StartFuncFromBuildBSTables } from "./BuildBSTables/entryFile.js";
// import { StartFunc as StartFuncFromShowOnDom } from "./showOnDom.js";
import { StartFunc as StartFuncFromRowDataFromGet } from "./RowDataFromGet/Entry.js";

let StartFunc = () => {
    StartFuncFromAddListeners();
    // StartFuncFromBuildBSTables();
    StartFuncFromRowDataFromGet();
};

export { StartFunc };