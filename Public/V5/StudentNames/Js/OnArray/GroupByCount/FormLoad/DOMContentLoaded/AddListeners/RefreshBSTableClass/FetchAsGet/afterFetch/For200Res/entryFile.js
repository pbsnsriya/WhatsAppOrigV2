let StartFunc = ({ inResponseAsJson }) => {
    let jVarLocalArray = jFLocalObjectToArray({ inObject: inResponseAsJson });

    var $table = $('#table');
    $table.bootstrapTable("load", jVarLocalArray);
};

const jFLocalObjectToArray = ({ inObject }) => {
    let jVarLocalArray = [];

    for (const [key, value] of Object.entries(inObject)) {
        jVarLocalArray.push({
            ColumnName: key,
            Count: value
        });
    };

    return jVarLocalArray;
};

export { StartFunc };