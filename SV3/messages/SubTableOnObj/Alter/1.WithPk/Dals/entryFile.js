import { StartFunc as StartFuncFromInsertToFile } from '../KFs/insertToFile.js';

let postDefaultFunc = ({ inBody, inPk, inRowPk, inKeyName }) => {
    let LocalFromLowDb = StartFuncFromInsertToFile({ inBody, inPk, inRowPk, inKeyName });

    if (LocalFromLowDb.KTF === false) {
        return LocalFromLowDb;
    };

    return LocalFromLowDb;
};

export {
    postDefaultFunc
};