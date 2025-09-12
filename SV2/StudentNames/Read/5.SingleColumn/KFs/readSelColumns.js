import fs from "fs";
import ParamsJson from '../../../CommonFuncs/params.json' with {type: 'json'};

let StartFunc = ({ inColumnName }) => {
    const LocalFileName = ParamsJson.TableName;
    const LocalDataPath = ParamsJson.DataPath;

    let LocalReturnData = { KTF: false };
    let filePath = `${LocalDataPath}/${LocalFileName}.json`;

    try {
        if (!fs.existsSync(filePath)) {
            LocalReturnData.KReason = `${LocalFileName}.json File does not exist in ${LocalDataPath} Folder.`;
            console.warn(LocalReturnData.KReason);
            return LocalReturnData;
        };

        const data = fs.readFileSync(filePath, 'utf8');
        const LocalDataAsJson = JSON.parse(data);

        LocalReturnData.KTF = true;
        LocalReturnData.JsonData = LocalDataAsJson.map(element => element[inColumnName]);
    } catch (err) {
        LocalReturnData.KReason = `Error reading ${LocalFileName} file.`;
        console.warn(LocalReturnData.KReason);
        return LocalReturnData;
    };

    return LocalReturnData;
};

export { StartFunc };
