let StartFunc = ({ inResponseAsJson }) => {
    var $table = $('#table');
    // debugger;
    // $table.bootstrapTable("load", inResponseAsJson);
    let LocalArray = [];

    Object.entries(inResponseAsJson).forEach(([key, value]) => {
        console.log(`${key}: ${value}`);
        LocalArray.push({ Key: key, Value: value });
    });

    $table.bootstrapTable("load", LocalArray);
};



export { StartFunc };