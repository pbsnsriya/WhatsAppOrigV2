import { StartFunc as StartFuncFromReadSelColumns } from '../KFs/readSelColumns.js';

let getDefaultFunc = ({ inColumnName }) => {
    let LocalFromLowDb = StartFuncFromReadSelColumns({ inColumnName });

    return LocalFromLowDb;
};

export {
    getDefaultFunc
};