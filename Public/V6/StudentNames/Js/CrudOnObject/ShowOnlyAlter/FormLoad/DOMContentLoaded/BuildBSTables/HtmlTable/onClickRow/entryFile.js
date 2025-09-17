import { StartFunc as StartFuncNav } from "./Nav/entryFile.js";

const StartFunc = (row, $element, field) => {

    if (row.field === "KS-Alter") {
        StartFuncNav({ inRowKey: row.row.Key }); 
    }
};

export { StartFunc };
