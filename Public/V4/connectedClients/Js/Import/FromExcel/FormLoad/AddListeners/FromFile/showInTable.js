const $table = $('#table');

let StartFunc = ({ inData }) => {
    let jVarLocalData = inData;
    $table.bootstrapTable("load", jVarLocalData);
};

export { StartFunc };