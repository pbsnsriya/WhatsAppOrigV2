import fs from "fs";
import ParamsJson from '../../../CommonFuncs/params.json' with { type: 'json' };

let StartFunc = ({ inColumnName }) => {
    const LocalFileName = ParamsJson.TableName;
    const LocalDataPath = ParamsJson.DataPath;

    let LocalReturnData = { KTF: false };
    const filePath = `${LocalDataPath}/${LocalFileName}.json`;

    try {
        if (!fs.existsSync(filePath)) {
            LocalReturnData.KReason = `${LocalFileName}.json File does not exist in ${LocalDataPath} Folder.`;
            console.warn(LocalReturnData.KReason);
            return LocalReturnData;
        }

        const data = fs.readFileSync(filePath, 'utf8');
        const LocalDataAsJson = JSON.parse(data);

        const countsMap = {};

        for (const row of LocalDataAsJson) {
            const key = row[inColumnName];
            if (key in countsMap) {
                countsMap[key]++;
            } else {
                countsMap[key] = 1;
            }
        }

        LocalReturnData.KTF = true;
        LocalReturnData.JsonData = countsMap;

    } catch (err) {
        LocalReturnData.KReason = `Error reading ${LocalFileName} file.`;
        console.warn(LocalReturnData.KReason);
    }

    return LocalReturnData;
};

export { StartFunc };
