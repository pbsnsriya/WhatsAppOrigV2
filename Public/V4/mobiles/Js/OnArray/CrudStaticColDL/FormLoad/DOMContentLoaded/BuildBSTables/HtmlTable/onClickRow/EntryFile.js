import { StartFunc as StartFuncAddOnButton } from "./AddOnButton.js";
import { StartFunc as StartFuncDeleteButton } from "./DeleteRow/EntryFile.js";

const StartFunc = (row, $element, field) => {
    if (field === 3) {
        StartFuncAddOnButton({ inRow: row });
    };

    if (field === 9) {
        if (window.confirm("Do you really want to Delete Item?")) {
            StartFuncDeleteButton({ inItemSerial: row.pk });
        };
    };
};

export { StartFunc };