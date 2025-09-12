import { StartFunc as StartFuncTableFooterSaveButtonId } from "./TableFooterSaveButtonId/EntryFile.js";

let StartFunc = () => {
    StartFuncTableFooterSaveButtonId();
    // debugger;
    let $autoFocusInput = $("#table tfoot").find("input[autofocus], select[autofocus], textarea[autofocus]");

    // console.log("11111111111111 : ", $autoFocusInput);
    if ($autoFocusInput.length > 0) {
        // console.log("222222222222 : ", $autoFocusInput[0]);
        $autoFocusInput[0].focus();
    };
};

export { StartFunc };