import { StartFunc as StartFuncSaveButtonId } from "./SaveButtonId/EntryFile.js";
import { StartFunc as StartFuncFromFromFile } from "./FromFile/entryFile.js";
import { StartFunc as StartFuncFromBuildBsTable } from "./BuildBsTable/entryFile.js";

let StartFunc = () => {
    StartFuncFromBuildBsTable();
    StartFuncFromFromFile();
    StartFuncSaveButtonId();

};

export { StartFunc };