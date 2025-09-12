import { StartFunc as StartFuncFromOnPostBody } from "./OnPostBody/EntryFile.js";
import { StartFunc as StartFuncFromOnClickRow } from "./OnClickRow/EntryFile.js";

const StartFunc = () => {
    var $table = $('#table');

    let LocalConfig = {
        onPostBody: StartFuncFromOnPostBody,
        onClickRow: StartFuncFromOnClickRow
    };


    $table.bootstrapTable(LocalConfig);

};

export { StartFunc };
