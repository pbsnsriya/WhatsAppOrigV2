import { StartFunc as StartFuncFromReadSelColumns } from '../KFs/readSelColumns.js';

let postDefaultFunc = ({ inColumnName }) => {
    let LocalFromLowDb = StartFuncFromReadSelColumns({ inColumnName });

    return LocalFromLowDb;
};

export {
    postDefaultFunc
};