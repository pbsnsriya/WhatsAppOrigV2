import { StartFunc as StartFuncDOMContentLoaded } from "./DOMContentLoaded/entryFile.js";
import { StartFunc as StartFuncFromSaveTaskId } from './SaveTaskId/EntryFile.js';

let StartFunc = () => {
    StartFuncDOMContentLoaded();
	StartFuncFromSaveTaskId();
};

export { StartFunc };