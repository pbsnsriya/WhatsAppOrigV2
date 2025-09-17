import { StartFunc as StartFuncFromReadFromFile } from '../KFs/readFromFile.js';

let GetFunc = () => {
    let LocalFromLowDb = StartFuncFromReadFromFile();

    return LocalFromLowDb;
};

export {
    GetFunc
};