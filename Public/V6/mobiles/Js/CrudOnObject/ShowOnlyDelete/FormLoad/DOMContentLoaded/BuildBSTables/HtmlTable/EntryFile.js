import { StartFunc as StartFuncOnClickRowFunc } from "./onClickRow/entryFile.js";

const StartFunc = () => {
    var $table = $('#table');

    let LocalConfig = {
        onClickRow: function (row, $element, field) {
            StartFuncOnClickRowFunc({ row, $element, field });
        }
    };

    $table.bootstrapTable(LocalConfig);
};

export { StartFunc };
