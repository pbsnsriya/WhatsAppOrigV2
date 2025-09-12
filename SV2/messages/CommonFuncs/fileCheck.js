import fs from "fs";
import ParamsJson from './params.json' with { type: 'json' };

let StartFunc = () => {
    const LocalFileName = ParamsJson.TableName;
    const LocalDataPath = ParamsJson.DataPath;
    const filePath = `${LocalDataPath}/${LocalFileName}.json`;
    let LocalReturnData = { KTF: false };

    if (!fs.existsSync(filePath)) {
        LocalReturnData.KReason = `${LocalFileName}.json File does not exist in ${LocalDataPath} Folder.`;
        console.warn(LocalReturnData.KReason);
        return LocalReturnData;
    }
    LocalReturnData.filePath = filePath;
    LocalReturnData.fileName = LocalFileName;
    LocalReturnData.KTF = true;
    return LocalReturnData;
}
export { StartFunc }