import {
    postDefaultFunc as postDefaultFuncFromDal
} from '../Dals/entryFile.js';

let postDefaultFunc = ({ inRequestBody }) => {
    return postDefaultFuncFromDal({ inRequestBody });
};

export {
    postDefaultFunc
};