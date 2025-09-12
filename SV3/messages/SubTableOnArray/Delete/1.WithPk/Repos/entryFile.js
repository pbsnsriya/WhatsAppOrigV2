import {
    postDefaultFunc as postDefaultFuncFromDal,
} from '../Dals/entryFile.js';

let postDefaultFunc = ({ inKey, inRowPk, inKeyName }) => {
    return postDefaultFuncFromDal({ inKey, inRowPk, inKeyName });
};

export {
    postDefaultFunc
};