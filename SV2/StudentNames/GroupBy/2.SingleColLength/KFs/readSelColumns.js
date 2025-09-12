import fs from "fs";

import ParamsJson from '../../../CommonFuncs/params.json' with {type: 'json'};

let StartFunc = ({ inColumnName }) => {
    let LocalReturnData = { KTF: false };
    const LocalFileName = ParamsJson.TableName;
    const LocalDataPath = ParamsJson.DataPath;
    const LocalColumnName = inColumnName;

    let filePath = `${LocalDataPath}/${LocalFileName}.json`;

    try {
        if (!fs.existsSync(filePath)) {
            LocalReturnData.KReason = `${LocalFileName}.json File does not exist in ${LocalDataPath} Folder.`;
            console.warn(LocalReturnData.KReason);
            return LocalReturnData;
        }

        const data = fs.readFileSync(filePath, 'utf8');
        const LocalDataAsJson = JSON.parse(data);

        const LocalGroupedData = Object.groupBy(LocalDataAsJson, LoopItem => LoopItem[LocalColumnName]);
        const LocalReturnObject = {};

        for (const prop in LocalGroupedData) {
            LocalReturnObject[prop] = LocalGroupedData[prop].length;
        }

        LocalReturnData.KTF = true;
        LocalReturnData.JsonData = LocalReturnObject;
    } catch (err) {
        LocalReturnData.KReason = `Error reading ${LocalFileName} file.`;
        console.warn(LocalReturnData.KReason);
        return LocalReturnData;
    }

    return LocalReturnData;
};

export { StartFunc };
