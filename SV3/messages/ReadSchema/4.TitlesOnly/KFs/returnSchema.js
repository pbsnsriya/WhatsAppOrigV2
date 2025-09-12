import ParamsJson from '../../../CommonFuncs/params.json' with { type: 'json' };

let StartFunc = () => {
    let LocalReturnData = {};
    LocalReturnData.KTF = true;

    LocalReturnData.JsonData = ParamsJson.ColumnsWithSchema.map(column => column.title);

    return LocalReturnData;
};

export { StartFunc };
