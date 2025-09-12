const StartFunc = (req, res, next) => {
    const LocalBody = req.body;

    if (Object.keys(LocalBody).length === 0) {
        return res.status(400).send("Request body should not be empty.");
    };

    if (Array.isArray(LocalBody)) {
        return res.status(400).send("Remove The Array From The Body.");
    };

    if (!("Key" in LocalBody)) {
        return res.status(400).send("Request body should be Key.");
    };

    if (!("Value" in LocalBody)) {
        return res.status(400).send("Request body should be Value.");
    };

    if (LocalBody.Key === "") {
        return res.status(400).send("Key should not be empty.");
    };

    if (LocalBody.Value == "") {
        return res.status(400).send("Value should not be empty.");
    };

    next();
};

export { StartFunc };
