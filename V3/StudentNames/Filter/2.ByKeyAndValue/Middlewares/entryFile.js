const StartFunc = (req, res, next) => {
    const ColumnName = req.params.inKey;

    if (
        !ColumnName ||
        typeof ColumnName !== 'string' ||
        ColumnName.trim() === "" ||
        ColumnName.includes("{") || ColumnName.includes("}")
    ) {
        return res.status(400).send("Valid ColumnName is required in the URL parameter.");
    }

    next();
};

export { StartFunc };
