import { StartFunc as StartFuncOnClickRowFunc } from "./onClickRow/entryFile.js";

const StartFunc = () => {
    var $table = $('#table');

    const finalOptions = {
        onClickRow: StartFuncOnClickRowFunc
    };

    $table.bootstrapTable(finalOptions);
};

export { StartFunc };
