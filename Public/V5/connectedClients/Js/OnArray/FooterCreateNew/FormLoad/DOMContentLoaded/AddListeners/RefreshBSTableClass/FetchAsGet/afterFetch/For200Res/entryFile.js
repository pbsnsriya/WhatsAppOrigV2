let StartFunc = ({ inResponseAsJson }) => {
    var $table = $('#table');
    // debugger;
    $table.bootstrapTable("load", inResponseAsJson);
};

export { StartFunc };