import optionsJson from './options.json' with {type: 'json'};
import { StartFunc as ForColumns } from "./ForColumns/EntryFile.js";

const $table = $('#table');

const StartFunc = ({ inResponseAsJson }) => {
    optionsJson.data = inResponseAsJson;

    ForColumns({ inColumns: optionsJson.columns });
    jFLocalPrepareColumns({ inFirstRow: inResponseAsJson[0] });

    $table.bootstrapTable('destroy').bootstrapTable(optionsJson);
};

const jFLocalPrepareColumns = ({ inFirstRow }) => {
    Object.keys(inFirstRow).forEach((inKey) => {
        optionsJson.columns.push({ field: inKey, title: inKey });
    });
};

export { StartFunc };

