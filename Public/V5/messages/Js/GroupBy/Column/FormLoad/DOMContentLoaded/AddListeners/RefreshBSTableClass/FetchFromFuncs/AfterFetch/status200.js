const StartFunc = ({ inResponse }) => {
    var $table = $('#table');
    console.log("AAAAAAAAAA : ", inResponse);

    $table.bootstrapTable("load", inResponse);
};

export { StartFunc };
