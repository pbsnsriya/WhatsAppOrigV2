import {
    postDefaultFunc as postDefaultFuncFromDal
} from '../Dals/entryFile.js';

let postDefaultFunc = ({ inColumnName, inRequestBody }) => {
    return postDefaultFuncFromDal({ inColumnName, inRequestBody });
};

export {
    postDefaultFunc
};