import {
    postDefaultFunc as postDefaultFuncFromDal
} from '../Dals/entryFile.js';

let postDefaultFunc = ({ inValue, inKey }) => {
    return postDefaultFuncFromDal({ inValue, inKey });
};

export {
    postDefaultFunc
};