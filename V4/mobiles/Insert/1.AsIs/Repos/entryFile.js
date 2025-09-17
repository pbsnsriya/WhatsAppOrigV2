import {
    postDefaultFunc as postDefaultFuncFromDal
} from '../Dals/entryFile.js';

let postDefaultFunc = ({ inKey, inValue }) => {
    return postDefaultFuncFromDal({ inKey, inValue });
};

export {
    postDefaultFunc
};