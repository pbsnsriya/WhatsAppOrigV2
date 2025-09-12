import { StartFunc as StartFuncFromDeleteFromFile } from '../KFs/deleteFromFile.js';

let postDefaultFunc = ({ inKey, inRowPk, inKeyName }) => {
    let LocalFromLowDb = StartFuncFromDeleteFromFile({ inKey, inRowPk, inKeyName });

    return LocalFromLowDb;
};

export {
    postDefaultFunc
};