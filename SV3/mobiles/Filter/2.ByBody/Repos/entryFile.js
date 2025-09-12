import {
    PostFunc as PostFuncDal
} from '../dals/entryFile.js';

let PostFunc = ({ inKey, inValue }) => {
    return PostFuncDal({ inKey, inValue });
};

export {
    PostFunc
};