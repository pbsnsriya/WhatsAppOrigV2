import commonConfigJson from '../../../../../Config.json' with {type: 'json'};
import { StartFunc as StartFuncFromOnPostBody } from "./OnPostBody/EntryFile.js";
import { StartFunc as StartFuncFromForColumns } from "./ForColumns/entryFile.js";

const StartFunc = () => {
    var $table = $('#table');

    let LocalConfig = {};
    LocalConfig.onPostBody = StartFuncFromOnPostBody;

    // commonConfigJson.columns = StartFuncFromForColumns({ inColumns: commonConfigJson.columns });

    $table.bootstrapTable(LocalConfig);
};

export { StartFunc };
