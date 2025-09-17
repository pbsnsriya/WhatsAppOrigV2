import {
    postDefaultFunc as postDefaultFuncFromDal,
} from '../Dals/entryFile.js';

let postDefaultFunc = ({ inKey }) => {
    return postDefaultFuncFromDal({ inKey });
};

export {
    postDefaultFunc
};