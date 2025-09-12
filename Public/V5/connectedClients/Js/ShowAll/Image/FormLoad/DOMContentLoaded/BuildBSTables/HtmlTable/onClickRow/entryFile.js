import { StartFunc as FetchDelete } from "./FetchDelete/entry.js";

const StartFunc = async (row, $element, field) => {
    if (field === "KS-Image") {

        if ("pk" in row) {
            await FetchDelete({ inRowPk: row.pk });
        }
    }
};

export { StartFunc };
