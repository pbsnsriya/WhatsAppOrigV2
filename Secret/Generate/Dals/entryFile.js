import { StartFunc as StartFuncFromInsertToFile } from '../KFs/insertToFile.js';

let postDefaultFunc = ({LocalCoumnSecret}) => {
    let LocalFromLowDb = StartFuncFromInsertToFile({LocalCoumnSecret});

    return LocalFromLowDb;
};

export {
    postDefaultFunc
};