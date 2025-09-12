import {
    postDefaultFunc as postDefaultFuncFromDal
} from '../Dals/entryFile.js';

let postDefaultFunc = ({ inRequestBody, inKey }) => {
    return postDefaultFuncFromDal({ inRequestBody, inKey });
};

export {
    postDefaultFunc
};