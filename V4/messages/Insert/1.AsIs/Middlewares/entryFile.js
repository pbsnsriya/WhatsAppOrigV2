const StartFunc = (req, res, next) => {
    const LocalBody = req.body;

    if (!LocalBody) {
        return res.status(400).send("Request body is required.");
    }

    if (Array.isArray(LocalBody)) {
        return res.status(400).send("Request body should not be an array.");
    }

    if (typeof LocalBody === 'object' && Object.keys(LocalBody).length === 0) {
        return res.status(400).send("Request body should not be an empty object.");
    }

    if (!("Key" in LocalBody)) {
        return res.status(400).send("Key is not in body.");
    }

    if (!("Value" in LocalBody)) {
        return res.status(400).send("Value is not in body.");
    }

    if (
        LocalBody.Key === null || LocalBody.Key === undefined || LocalBody.Key === ""
    ) {
        return res.status(400).send("Key should not be empty.");
    }
    if (
        LocalBody.Value === null || LocalBody.Value === undefined || LocalBody.Value === ""
    ) {
        return res.status(400).send("Value should not be empty.");
    }

    next();
};

export { StartFunc };
