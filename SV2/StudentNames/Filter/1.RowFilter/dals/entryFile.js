import { StartFunc as StartFuncFromReadFromFile } from '../KFs/readFromFile.js';

let GetFunc = ({ inKey, inValue }) => {
    let LocalFromLowDb = StartFuncFromReadFromFile({ inKey, inValue });

    return LocalFromLowDb;
};

export {
    GetFunc
};