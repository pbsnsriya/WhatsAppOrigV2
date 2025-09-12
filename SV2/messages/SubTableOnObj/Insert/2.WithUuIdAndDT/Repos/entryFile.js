import {
    postDefaultFunc as postDefaultFuncFromDal
} from '../Dals/entryFile.js';

let postDefaultFunc = ({ inRowIndex, inKeyName, inRequestBody }) => {
    return postDefaultFuncFromDal({ inRowIndex, inKeyName, inRequestBody });
};

export {
    postDefaultFunc
};