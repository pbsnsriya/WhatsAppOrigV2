import fs from "fs";

import ParamsJson from '../../../CommonFuncs/params.json' with {type: 'json'};

let StartFunc = () => {
    let LocalReturnData = {};
    LocalReturnData.KTF = true;
    LocalReturnData.JsonData = ParamsJson.ColumnsWithSchema;

    return LocalReturnData;
};

export { StartFunc };
