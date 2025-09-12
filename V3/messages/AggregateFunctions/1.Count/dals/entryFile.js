import { StartFunc as StartFuncFromReadFromFile } from '../KFs/readFromFile.js';

let GetFunc = () => {
    let LocalFromLowDb = StartFuncFromReadFromFile();

    if (!LocalFromLowDb.KTF) {
        return { KTF: false, KReason: "Error reading data" };
    }

    return {
        KTF: true,
        JsonData: LocalFromLowDb.JsonData
    };
};

export {
    GetFunc
};
