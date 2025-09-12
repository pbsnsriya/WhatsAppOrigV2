import fs from "fs";

import ParamsJson from '../../../CommonFuncs/params.json' with { type: 'json' };

let StartFunc = () => {
    let LocalReturnData = {};
    LocalReturnData.KTF = true;

    LocalReturnData.JsonData = ParamsJson.ColumnsWithSchema.map(column => {
        return {
            field: column.field,
            title: column.title
        };
    });

    return LocalReturnData;
};

export { StartFunc };
