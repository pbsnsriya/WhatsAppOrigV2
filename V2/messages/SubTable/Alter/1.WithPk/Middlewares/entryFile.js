const StartFunc = (req, res, next) => {
    const LocalBody = req.body;

    if (!LocalBody || typeof LocalBody !== 'object') {
        return res.status(400).send("Invalid request body.");
    }

    if (Array.isArray(LocalBody)) {
        return res.status(400).send("Remove the array from the body.");
    }

    if (Object.keys(LocalBody).length === 0) {
        return res.status(400).send("Request body should not be empty.");
    }

    const { Key: LocalKey, Value: LocalValue } = LocalBody;

    if (!LocalKey || !LocalValue) {
        return res.status(400).send("Both 'Key' and 'Value' fields are required.");
    }

    next();
};

export { StartFunc };
