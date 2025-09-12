let StartFunc = () => {
    let jVarLocalRefreshBSTableId = document.querySelector(`.RefreshBSTableClass`);
    jVarLocalRefreshBSTableId.click();

    let $autoFocusInput = $("#table tfoot").find("input[autofocus], select[autofocus], textarea[autofocus]");


    if ($autoFocusInput.length > 0) {
        console.log("zzzzzzzzzzz : ", $autoFocusInput[0]);
        $autoFocusInput[0].focus();
    };
};

export { StartFunc };