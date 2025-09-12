const CommonColumnsArray = ["UserName", "Password"];
import { StartFunc as StartFuncFromForMissingFields } from "./forMissingFields.js";
import { StartFunc as StartFuncFromForExtraFields } from "./forExtraFields.js";

const StartFunc = (req, res, next) => {
    const LocalBody = req.body;

    if (Array.isArray(LocalBody)) {//  Check if the incoming data is a valid object and not empty
        return res.status(400).send("Request body should be Object only.");
    };

    if (typeof LocalBody === 'object' && Object.keys(LocalBody).length === 0) {
        return res.status(400).send("Request body should not be an empty object.");
    };

    const LocalFromExtra = StartFuncFromForMissingFields({
        inColumnsArray: CommonColumnsArray,
        inRequestBody: LocalBody
    });

    if (LocalFromExtra.KTF) {
        return res.status(400).send(LocalFromExtra.KReason);
    };

    const LocalFromForExtraFields = StartFuncFromForExtraFields({
        inColumnsArray: CommonColumnsArray,
        inRequestBody: LocalBody
    });

    if (LocalFromForExtraFields.KTF) {
        return res.status(400).send(LocalFromForExtraFields.KReason);
    };

    next();
};

export { StartFunc };