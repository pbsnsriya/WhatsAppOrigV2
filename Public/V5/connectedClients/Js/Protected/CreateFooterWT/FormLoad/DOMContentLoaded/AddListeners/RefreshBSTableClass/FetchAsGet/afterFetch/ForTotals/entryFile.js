import { StartFunc as ColumnRate } from "./ColumnRate/entryFile.js";
import ConfigJson from '../../../../../../../../Config.json' with { type: 'json' };

let StartFunc = ({ inColumns, inData }) => {

    const totalColumns = ConfigJson.columns.filter(column => column.ShowTotal === true);

    totalColumns.forEach(column => {
        ColumnRate({ inFindColumn: column, inData });
    });
};

export { StartFunc };
