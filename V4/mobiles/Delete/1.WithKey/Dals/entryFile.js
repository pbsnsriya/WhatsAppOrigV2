import { StartFunc as StartFuncFromDeleteFromFile } from '../KFs/deleteFromFile.js';

let postDefaultFunc = ({ inKey }) => {
    let LocalFromLowDb = StartFuncFromDeleteFromFile({ inKey });

    return LocalFromLowDb;
};

export {
    postDefaultFunc
};