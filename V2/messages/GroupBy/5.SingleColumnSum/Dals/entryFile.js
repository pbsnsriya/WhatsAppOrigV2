import { StartFunc as StartFuncFromReadSelColumns } from '../KFs/readSelColumns.js';

let postDefaultFunc = ({ inColumnName, inRequestBody }) => {
    let LocalFromLowDb = StartFuncFromReadSelColumns({ inColumnName, inRequestBody });

    return LocalFromLowDb;
};

export {
    postDefaultFunc
};