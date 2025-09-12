import { StartFunc as StartFuncFromReadSelColumns } from '../KFs/readSelColumns.js';

let postDefaultFunc = ({ inRequestBody }) => {
    let LocalFromLowDb = StartFuncFromReadSelColumns({ inRequestBody });

    return LocalFromLowDb;
};

export {
    postDefaultFunc
};