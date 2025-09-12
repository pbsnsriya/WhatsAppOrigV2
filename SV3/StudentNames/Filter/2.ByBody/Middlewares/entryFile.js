const StartFunc = (req, res, next) => {
    const LocalBody = req.body;

    if (Array.isArray(LocalBody)) {//  Check if the incoming data is a valid object and not empty
        return res.status(400).send("Request body should be Object only.");
    };

    if (typeof LocalBody === 'object' && Object.keys(LocalBody).length === 0) {
        return res.status(400).send("Request body should not be an empty object.");
    };

    if (LocalBody.inKey === "") {
        return res.status(400).send("inKey should not be an empty.");
    };

    if (LocalBody.inValue === "") {
        return res.status(400).send("inValue should not be an empty.");
    };

    next();
};

export { StartFunc };
