import fs from "fs";
import ParamsJson from "../../../CommonFuncs/params.json" with { type: "json" };

let StartFunc = () => {
    const LocalFileName = ParamsJson.TableName;
    const LocalDataPath = ParamsJson.DataPath;

    let LocalReturnData = { KTF: false };
    let filePath = `${LocalDataPath}/${LocalFileName}.json`;

    try {
        if (!fs.existsSync(filePath)) {
            LocalReturnData.KReason = `${LocalFileName}.json file does not exist in ${LocalDataPath} folder.`;
            console.warn(LocalReturnData.KReason);
            return LocalReturnData;
        }

        const data = fs.readFileSync(filePath, "utf8");
        let LocalData = JSON.parse(data);

        if (LocalData.length === 0) {
            LocalReturnData.KReason = `${LocalFileName}.json file has no data.`;
            return LocalReturnData;
        }

        let LocalMaxRow = LocalData[LocalData.length - 1];
        LocalReturnData.KTF = true;
        LocalReturnData.JsonData = LocalMaxRow;
    } catch (err) {
        LocalReturnData.KReason = `Error reading ${LocalFileName}.json file.`;
        console.warn(LocalReturnData.KReason);
        return LocalReturnData;
    }

    return LocalReturnData;
};

export { StartFunc };
