import {
    postDefaultFunc as postDefaultFuncFromDal
} from '../Dals/entryFile.js';

let postDefaultFunc = ({ inBody, inPk, inRowPk, inKeyName }) => {
    return postDefaultFuncFromDal({ inBody, inPk, inRowPk, inKeyName });
};

export {
    postDefaultFunc
};