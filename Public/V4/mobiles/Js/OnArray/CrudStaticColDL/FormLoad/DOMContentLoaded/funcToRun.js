import { StartFunc as StartFuncFromAddListeners } from "./AddListeners/entryFile.js";
import { StartFunc as StartFuncFromBuildBSTables } from "./BuildBSTables/entryFile.js";
import { StartFunc as StartFuncFromShowOnDom } from "./showOnDom.js";
import { StartFunc as StartFuncFromFillDataList } from "./FillDataList/entryFile.js";

let StartFunc = () => {
    StartFuncFromAddListeners();
    StartFuncFromBuildBSTables();
    StartFuncFromShowOnDom();
    StartFuncFromFillDataList();
};

export { StartFunc };