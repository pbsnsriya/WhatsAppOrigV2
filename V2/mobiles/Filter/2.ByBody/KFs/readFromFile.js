import fs from "fs";
import ParamsJson from '../../../CommonFuncs/params.json' with { type: 'json' };

let StartFunc = ({ inKey, inValue }) => {
    const LocalFileName = ParamsJson.TableName;
    const LocalDataPath = ParamsJson.DataPath;

    let LocalReturnData = { KTF: false };

    try {
        const data = fs.readFileSync(`${LocalDataPath}/${LocalFileName}.json`, 'utf8');
        const parsedData = JSON.parse(data);

        const filteredData = parsedData.filter(element => {
            let LocalKey = eval(inKey);
            let LocalValue = eval(inValue);
            if (LocalKey == LocalValue) {
                return element;
            };
        });
        
        if (filteredData.length === 0) {
            LocalReturnData.KReason = `No data found with ${inKey}: ${inValue}`;
            return LocalReturnData;
        }

        LocalReturnData.KTF = true;
        LocalReturnData.JsonData = filteredData;
        return LocalReturnData;

    } catch (err) {
        console.error('Error reading file:', err);
    }

    return LocalReturnData;
};

export { StartFunc };
