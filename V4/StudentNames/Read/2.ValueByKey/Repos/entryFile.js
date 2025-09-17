import {
    GetFunc as GetFuncDal
} from '../dals/entryFile.js';

let GetFunc = ({ inKey }) => {
    return GetFuncDal({ inKey });
};

export {
    GetFunc
};