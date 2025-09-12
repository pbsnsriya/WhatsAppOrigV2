import { StartFunc as StartFuncFromInsertToFile } from '../KFs/insertToFile.js';

let postDefaultFunc = ({}) => {
    let LocalFromLowDb = StartFuncFromInsertToFile({});

    return LocalFromLowDb;
};

export {
    postDefaultFunc
};