import fs from "fs";

import ParamsJson from '../../../CommonFuncs/params.json' with {type: 'json'};

let StartFunc = ({ inRequestBody }) => {
    const LocalFileName = ParamsJson.TableName;
    const LocalDataPath = ParamsJson.DataPath;
    console.log("aaaaaaaaaaaaaaa : ", inRequestBody);

    let LocalReturnData = { KTF: false };
    let filePath = `${LocalDataPath}/${LocalFileName}.json`;

    try {
        if (!fs.existsSync(filePath)) {
            LocalReturnData.KReason = `${LocalFileName}.json File does not exist in ${LocalDataPath} Folder.`;
            console.warn(LocalReturnData.KReason);
            return LocalReturnData;
        };

        const data = fs.readFileSync(`${LocalDataPath}/${LocalFileName}.json`, 'utf8');
        const LocalDataAsJson = JSON.parse(data);

        LocalReturnData.KTF = true;
        LocalReturnData.JsonData = inRequestBody.map(column => {
            return LocalDataAsJson.reduce((acc, curr) => {
                let value = curr[column];

                let numericValue = Number(value);
                if (!isNaN(numericValue)) {
                    acc += numericValue;
                }

                return acc;
            }, 0);
        });


    } catch (err) {
        LocalReturnData.KReason = `Error reading ${LocalFileName} file .`;
        console.warn(LocalReturnData.KReason);
        return LocalReturnData;
    };

    return LocalReturnData;
};

export { StartFunc };
