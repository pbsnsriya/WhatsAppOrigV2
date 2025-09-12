const StartFunc = (req, res, next) => {
    const LocalBody = req.body;

    if (!LocalBody || Object.keys(LocalBody).length === 0) {
        return res.status(400).send("Request body should not be empty.");
    }

    if (typeof LocalBody === 'object' && Object.keys(LocalBody).length === 0) {
        return res.status(400).send("Request body should not be an empty object.");
    }

    next();
};

export { StartFunc };
