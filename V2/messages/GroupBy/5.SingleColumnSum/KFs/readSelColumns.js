import fs from "fs";

import ParamsJson from '../../../CommonFuncs/params.json' with {type: 'json'};

let StartFunc = ({ inColumnName, inRequestBody }) => {
    const LocalFileName = ParamsJson.TableName;
    const LocalDataPath = ParamsJson.DataPath;
    const LocalColumnName = inColumnName;
    const LocalRequestBody = inRequestBody;

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
        // LocalReturnData.JsonData = LocalDataAsJson.map(element => element[inColumnName]);
        let LocalGroupedObject = LocalDataAsJson.reduce((acc, item) => {
            const key = item[LocalColumnName];
            if (!acc[key]) {
                acc[key] = [];
            }
            acc[key].push(item);
            return acc;
        }, {});

        LocalReturnData.JsonData = [];

        for (const [key, value] of Object.entries(LocalGroupedObject)) {
            let LocalObject = {};
            LocalObject.GroupColumn = key;

            LocalRequestBody.forEach(element => {
                const names = value.map(item => item[element]);

                LocalObject[`SumOf${element}`] = names.reduce((accumulator, currentValue) => {
                    return accumulator + currentValue;
                }, 0); // The '0' is the initial value for the accumulator
            });

            LocalReturnData.JsonData.push(LocalObject);
        };

    } catch (err) {
        LocalReturnData.KReason = `Error reading ${LocalFileName} file .`;
        console.warn(LocalReturnData.KReason);
        return LocalReturnData;
    };

    return LocalReturnData;
};

export { StartFunc };
