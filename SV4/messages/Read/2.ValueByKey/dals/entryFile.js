import { StartFunc as StartFuncFromReadFromFile } from '../KFs/readFromFile.js';

let GetFunc = ({ inKey }) => {
    let LocalFromLowDb = StartFuncFromReadFromFile({ inKey });

    return LocalFromLowDb;
};

export {
    GetFunc
};