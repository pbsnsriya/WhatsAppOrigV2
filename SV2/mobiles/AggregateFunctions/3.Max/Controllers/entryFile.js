import { GetFunc as GetFuncRepo } from '../Repos/entryFile.js';

let GetMaxFunc = (req, res) => {
    const { columnName } = req.params;
    const LocalFromRepo = GetFuncRepo();

    if (!LocalFromRepo.KTF) {
        return res.status(404).send(LocalFromRepo.KReason);
    }

    const dataArray = LocalFromRepo.JsonData;

    if (!Array.isArray(dataArray) || dataArray.length === 0) {
        return res.status(400).send("Data is empty or not an array.");
    }

    // Normalize column name for case-insensitive matching
    const targetKey = columnName.toLowerCase();

    // Collect numeric values from column (even if stored as string)
    const numericValues = [];

    for (const row of dataArray) {
        for (const key in row) {
            if (key.toLowerCase() === targetKey) {
                const rawValue = row[key];

                const numeric = Number(rawValue);
                if (!isNaN(numeric)) {
                    numericValues.push(numeric);
                }
            }
        }
    }

    if (numericValues.length === 0) {
        return res.status(400).send(`Column '${columnName}' has no numeric values.`);
    }

    const maxValue = Math.max(...numericValues);

    res.status(200).send(` ${maxValue}`);
};

export { GetMaxFunc };
