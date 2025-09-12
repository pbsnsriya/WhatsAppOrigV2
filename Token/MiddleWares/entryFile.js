import { StartFunc as StartFuncValidateToken } from "../jwt/ValidateToken.js";

let StartFunc = (req, res, next) => {
    if ("cookies" in req === false) {
        res.status(401).send({ message: 'cookies not found in request' });
        return;
    };

    if ("KSToken" in req.cookies === false) {
        res.status(401).send({ message: 'KSToken not found in cookies' });
        return;
    };

    let localClientToken = req.cookies?.KSToken;
    let localResult = StartFuncValidateToken({ inToken: localClientToken });

    if (localResult === false) {
        res.status(401).send({ message: 'Unauthorized' });
        return;
    };

    req.locals = {};
    req.locals.KeshavSoft = {}
    req.locals.KeshavSoft.DataPk = localResult;

    next();
};

export { StartFunc };