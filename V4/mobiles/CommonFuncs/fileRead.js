import fs from "fs";
import { StartFunc as StartFuncFileCheck } from "./fileCheck.js";

let StartFunc = () => {
    let LocalReturnData = { KTF: false };
    let LocalFileCheck = StartFuncFileCheck();

    if (LocalFileCheck.KTF === false) {
        LocalReturnData = { ...LocalFileCheck };
        return LocalReturnData;
    }
    try {
        const data = fs.readFileSync(LocalFileCheck.filePath, 'utf8');
        const LocalData = JSON.parse(data);

        LocalReturnData.KTF = true;
        LocalReturnData.JsonData = LocalData;
        return LocalReturnData;
    } catch (err) {
        LocalReturnData.KReason = `Error reading ${LocalFileCheck.fileName} file.`;
        console.warn(LocalReturnData.KReason);
        return LocalReturnData;
    }
};
export { StartFunc }