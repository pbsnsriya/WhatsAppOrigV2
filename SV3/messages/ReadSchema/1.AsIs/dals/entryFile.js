import { StartFunc as StartFuncFromReadFromFile } from '../KFs/returnSchema.js';

let GetFunc = () => {
    let LocalFromLowDb = StartFuncFromReadFromFile();

    return LocalFromLowDb;
};

export {
    GetFunc
};