const GetFunc = (req, res, next) => {
    const LocalParams = req.params;

    if (!LocalParams) {
        return res.status(400).send("Request params is required.");
    }

    if (
        LocalParams.Key === null || LocalParams.Key === undefined || LocalParams.Key === ""
    ) {
        return res.status(400).send("Key should not be empty.");
    }

    next();
};

export { GetFunc };
