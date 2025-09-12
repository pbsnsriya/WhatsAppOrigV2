import { StartFunc as StartFuncFromReadFromFile } from '../KFs/readFromFile.js';

let PostFunc = ({ inKey, inValue }) => {
    let LocalFromLowDb = StartFuncFromReadFromFile({ inKey, inValue });

    return LocalFromLowDb;
};

export {
    PostFunc
};