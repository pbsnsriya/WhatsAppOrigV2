import {
    getDefaultFunc as getDefaultFuncFromDal
} from '../Dals/entryFile.js';

let getDefaultFunc = ({ inColumnName }) => {
    return getDefaultFuncFromDal({ inColumnName });
};

export {
    getDefaultFunc
};