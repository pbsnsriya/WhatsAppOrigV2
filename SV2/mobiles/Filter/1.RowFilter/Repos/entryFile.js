import {
    GetFunc as GetFuncDal
} from '../dals/entryFile.js';

let GetFunc = ({ inKey, inValue }) => {
    return GetFuncDal({ inKey, inValue });
};

export {
    GetFunc
};