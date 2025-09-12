import path from "path";
import fs from "fs";

import { StartFunc as SendMail } from '../SendMail/entryFile.js';
import CommonParamsJson from '../../../CommonFuncs/params.json' with {type: 'json'};

let StartFunc = async ({ inDomainName, inDataToInsert, insertedPk, inImageName }) => {
    let LocalTableFolder = CommonParamsJson.TableName;
    let LocalExtension = path.parse(inImageName).ext;
    const LocalDataPath = CommonParamsJson.DataPath;

    fs.renameSync(`${LocalDataPath}/${LocalTableFolder}/${inImageName}`, `${LocalDataPath}/${LocalTableFolder}/${insertedPk}${LocalExtension}`);

    const LocalFromSendMail = await SendMail({
        inDomainName,
        inDataToInsert, inpk: insertedPk
    });

    return await LocalFromSendMail;
};

export {
    StartFunc
};