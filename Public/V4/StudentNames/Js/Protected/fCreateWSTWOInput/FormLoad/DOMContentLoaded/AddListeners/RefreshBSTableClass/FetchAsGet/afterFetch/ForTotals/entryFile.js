import { StartFunc as ColumnRate } from "./ColumnRate/entryFile.js";
import { StartFunc as ShowDifference } from "./ShowDifference/entryFile.js";
import ConfigJson from '../../../../../../../../Config.json' with { type: 'json' };

let StartFunc = ({ inColumns, inData }) => {

    const totalColumns = ConfigJson.columns.filter(column => column.ShowTotal === true);

    totalColumns.forEach(column => {
        ColumnRate({ inFindColumn: column, inData });
    });


    const showDifference = ConfigJson.columns.filter(column => column.ShowDifference === true);

    showDifference.forEach(column => {
        ShowDifference({ inData: column, inData });
    });
};

export { StartFunc };
