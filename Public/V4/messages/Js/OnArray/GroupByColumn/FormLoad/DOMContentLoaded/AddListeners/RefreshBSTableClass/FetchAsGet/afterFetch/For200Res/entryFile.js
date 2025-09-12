let StartFunc = ({ inResponseAsJson }) => {
    var $table = $('#table');
    $table.bootstrapTable("load", inResponseAsJson);
};

export { StartFunc };