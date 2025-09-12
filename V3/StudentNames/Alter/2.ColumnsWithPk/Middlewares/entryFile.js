const CommonColumnsArray = ["StudentName","Mobile","email","CollegeName","Country","EntranceRank","YearPassOut","Back_logs","RollNumber","file","GitLink"];

const StartFunc = (req, res, next) => {
    const LocalBody = req.body;

    if (!LocalBody || typeof LocalBody !== 'object') {
        return res.status(400).send("Invalid request body.");
    };

    if (Array.isArray(LocalBody)) {
        return res.status(400).send("Remove the array from the body.");
    };

    if (Object.keys(LocalBody).length === 0) {
        return res.status(400).send("Request body should not be empty.");
    };
    if (JSON.stringify(Object.keys(LocalBody).sort()) === JSON.stringify(CommonColumnsArray.sort()) === false) {
        return res.status(400).send(`Request body should contain any of the mandate keys: ${CommonColumnsArray}`);
    };

    next();
};

export { StartFunc };