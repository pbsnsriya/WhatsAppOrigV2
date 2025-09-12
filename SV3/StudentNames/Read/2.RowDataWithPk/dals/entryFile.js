import { StartFunc as StartFuncFromReadFromFile } from '../KFs/readFromFile.js';

let GetFunc = ({ inId }) => {
    let LocalFromLowDb = StartFuncFromReadFromFile({ inId });

    return LocalFromLowDb;
};

export {
    GetFunc
};