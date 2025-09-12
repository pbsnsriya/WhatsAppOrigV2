import { StartFunc as StartFuncFromInsertToFile } from '../KFs/insertToFile.js';

let postDefaultFunc = ({ inRowIndex, inKeyName, inRequestBody }) => {
    let LocalFromLowDb = StartFuncFromInsertToFile({ inRowIndex, inKeyName, inRequestBody });

    if (LocalFromLowDb.KTF === false) {
        return LocalFromLowDb;
    };

    return LocalFromLowDb;
};

export {
    postDefaultFunc
};