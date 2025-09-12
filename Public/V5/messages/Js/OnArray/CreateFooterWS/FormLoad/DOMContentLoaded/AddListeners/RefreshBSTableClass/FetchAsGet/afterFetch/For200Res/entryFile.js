let StartFunc = ({ inResponseAsJson }) => {
    var $table = $('#table');

    $table.bootstrapTable("load", inResponseAsJson);

    // let $autoFocusInput = $("#table tfoot").find("input[autofocus], select[autofocus], textarea[autofocus]");

    // if ($autoFocusInput.length > 0) {
    //     console.log("1111111111111 : ", $autoFocusInput[0]);

    //     // $autoFocusInput[0].focus();
    // };
};

export { StartFunc };