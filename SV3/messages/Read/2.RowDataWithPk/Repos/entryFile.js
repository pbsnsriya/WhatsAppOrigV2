import {
    GetFunc as GetFuncDal
} from '../dals/entryFile.js';

let GetFunc = ({ inId }) => {
    return GetFuncDal({ inId });
};

export {
    GetFunc
};