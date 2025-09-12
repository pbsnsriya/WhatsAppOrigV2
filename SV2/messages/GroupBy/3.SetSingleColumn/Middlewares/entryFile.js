import paramsjsonData from '../../../CommonFuncs/params.json' with { type: 'json' };

const StartFunc = (req, res, next) => {
    const validColumns = paramsjsonData.Columns;
    const paramValues = Object.values(req.params);

    if (paramValues.length === 0) {
        return res.status(400).send("Request params should not be empty.");
    }

    const isValid = paramValues.every(value => validColumns.includes(value));

    if (!isValid) {
        return res.status(400).send("Request params should give valid key.");
    };

    next();
};

export { StartFunc };
