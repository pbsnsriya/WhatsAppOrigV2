import { StartFunc as StartFuncTableFooterSaveButtonId } from "./TableFooterSaveButtonId/EntryFile.js";

let StartFunc = () => {
    StartFuncTableFooterSaveButtonId();

    setTimeout(() => {
        let $autoFocusInput = $("#table tfoot").find("input[autofocus], select[autofocus], textarea[autofocus]");
        if ($autoFocusInput.length) {
            $autoFocusInput.trigger("focus");
        }
    }, 1000);
};

export { StartFunc };