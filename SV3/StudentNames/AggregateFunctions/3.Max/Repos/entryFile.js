import { GetFunc as GetFuncDal } from '../dals/entryFile.js';

let GetFunc = () => {
    return GetFuncDal();
};

export { GetFunc };
