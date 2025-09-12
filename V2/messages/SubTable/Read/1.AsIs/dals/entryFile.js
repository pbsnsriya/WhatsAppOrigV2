import { StartFunc as StartFuncFromReadFromFile } from '../KFs/readFromFile.js';

let GetFunc = ({ inRowIndex, inKeyName }) => {
    let LocalFromLowDb = StartFuncFromReadFromFile({ inRowIndex, inKeyName });

    return LocalFromLowDb;
};

export {
    GetFunc
};