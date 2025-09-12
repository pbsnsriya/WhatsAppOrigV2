import { StartFunc as StartFuncFromReadFromFile } from '../KFs/readFromFile.js';

let GetFunc = () => {
    return StartFuncFromReadFromFile();
};

export { GetFunc };
