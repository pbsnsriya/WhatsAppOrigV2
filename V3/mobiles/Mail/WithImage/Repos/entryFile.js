import {
    postDefaultFunc as postDefaultFuncFromDal
} from '../Dals/entryFile.js';

let postFunc = async ({ inDomainName, inDataToInsert, inImageName }) => {
    return await postDefaultFuncFromDal({ inDomainName, inDataToInsert, inImageName });
};

export {
    postFunc
};