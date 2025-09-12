import {
    postDefaultFunc as postDefaultFuncFromDal
} from '../Dals/entryFile.js';

let postDefaultFunc = ({LocalCoumnSecret}) => {
    let LocalFromDal = postDefaultFuncFromDal({LocalCoumnSecret});

    return LocalFromDal;
};

export {
    postDefaultFunc
};