import { StartFunc as ForTotals } from "../ForTotals/entryFile.js";

let StartFunc = ({ inResponseAsJson }) => {
    var $table = $('#table');

    $table.bootstrapTable("load", inResponseAsJson);

    let columns = $table.bootstrapTable('getOptions').columns[0];

    ForTotals({ inColumns: columns, inData: inResponseAsJson });
};

export { StartFunc };
