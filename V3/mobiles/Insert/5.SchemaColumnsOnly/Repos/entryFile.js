import {
    postDefaultFunc as postDefaultFuncFromDal
} from '../Dals/entryFile.js';

let postDefaultFunc = ({}) => {
    let LocalFromDal = postDefaultFuncFromDal({});

    return LocalFromDal;
};

export {
    postDefaultFunc
};