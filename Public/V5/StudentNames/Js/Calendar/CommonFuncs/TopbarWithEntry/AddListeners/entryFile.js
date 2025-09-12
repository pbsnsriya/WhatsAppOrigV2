import { StartFunc as StartFuncDOMContentLoaded } from "./DOMContentLoaded/entryFile.js";
import { StartFunc as StartFuncFromToLocalStorageId } from './ToLocalStorageId/EntryFile.js';
import { StartFunc as StartFuncFromFromLocalStorageId } from './FromLocalStorageId/EntryFile.js';

let StartFunc = () => {
    StartFuncDOMContentLoaded();
	StartFuncFromToLocalStorageId();
	StartFuncFromFromLocalStorageId();
};

export { StartFunc };