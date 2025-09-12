import fs from "fs";
import { StartFunc as StartFuncFileCheck } from "./fileCheck.js";

let StartFunc = ({ inData }) => {
    let LocalReturnData = { KTF: false };
    let LocalFileCheck = StartFuncFileCheck();

    if (LocalFileCheck.KTF === false) {
        LocalReturnData = { ...LocalFileCheck };
        return LocalReturnData;
    }
    try {
        fs.writeFileSync(LocalFileCheck.filePath, JSON.stringify(inData, null, 2), "utf8");

        LocalReturnData.KTF = true;
        return LocalReturnData;
    } catch (err) {
        LocalReturnData.KReason = `Error reading ${LocalFileCheck.fileName} file.`;
        console.warn(LocalReturnData.KReason);
        return LocalReturnData;
    }
};
export { StartFunc }