// import commonConfigJson from '../../../../../Config.json' with {type: 'json'};
import { StartFunc as StartFuncFromOnPostBody } from "./OnPostBody/EntryFile.js";

const StartFunc = () => {
    var $table = $('#table');

    let LocalConfig = {};

    LocalConfig.onPostBody = StartFuncFromOnPostBody;

    $table.bootstrapTable(LocalConfig);

};

export { StartFunc };
