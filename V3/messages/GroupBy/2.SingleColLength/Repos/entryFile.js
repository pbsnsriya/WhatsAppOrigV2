import {
    postDefaultFunc as postDefaultFuncFromDal
} from '../Dals/entryFile.js';

let postDefaultFunc = ({ inColumnName }) => {
    return postDefaultFuncFromDal({ inColumnName });
};

export {
    postDefaultFunc
};