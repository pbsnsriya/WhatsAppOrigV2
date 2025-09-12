import {
    GetFunc as GetFuncDal
} from '../dals/entryFile.js';

let GetFunc = ({ inRowIndex, inKeyName }) => {
    return GetFuncDal({ inRowIndex, inKeyName });
};

export {
    GetFunc
};