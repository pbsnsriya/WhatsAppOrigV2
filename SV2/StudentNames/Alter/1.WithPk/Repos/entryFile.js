import {
    postDefaultFunc as postDefaultFuncFromDal
} from '../Dals/entryFile.js';

let postDefaultFunc = ({ inBody, inPk }) => {
    return postDefaultFuncFromDal({ inBody, inPk });
};

export {
    postDefaultFunc
};