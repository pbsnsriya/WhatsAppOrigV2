import fs from "fs";
import ParamsJson from '../../../CommonFuncs/params.json' with { type: 'json' };

let StartFunc = ({ inColumnName }) => {
    const LocalFileName = ParamsJson.TableName;
    const LocalDataPath = ParamsJson.DataPath;
    const LocalColumnName = inColumnName;

    let LocalReturnData = { KTF: false };
    const filePath = `${LocalDataPath}/${LocalFileName}.json`;

    try {
        if (!fs.existsSync(filePath)) {
            LocalReturnData.KReason = `${LocalFileName}.json file does not exist in ${LocalDataPath} folder.`;
            console.warn(LocalReturnData.KReason);
            return LocalReturnData;
        }

        const rawData = fs.readFileSync(filePath, 'utf8');

        const LocalDataAsJson = JSON.parse(rawData);

        const grouped = Object.groupBy(LocalDataAsJson, item => item[LocalColumnName]);

        const filtered = {};
        for (const key of Object.keys(grouped)) {
            filtered[key] = [grouped[key][0]];
        }

        LocalReturnData.KTF = true;
        LocalReturnData.JsonData = filtered;

    } catch (err) {
        LocalReturnData.KReason = `Error reading ${LocalFileName} file: ${err.message}`;
        console.warn(LocalReturnData.KReason);
        return LocalReturnData;
    }

    return LocalReturnData;
};

export { StartFunc };
