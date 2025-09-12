import ParamsJson from '../../../../CommonFuncs/params.json' with { type: 'json' };
import { StartFunc } from "../KFs/readFromFile.js";

let GetFunc = (req, res, next) => {
    const LocalParams = req.params;
    const LocalRowIndex = LocalParams.RowIndex;
    const LocalKeyName = LocalParams.KeyName;

    const LocalReturnData = StartFunc({ inRowIndex: LocalRowIndex, inKeyName: LocalKeyName });

    if (!LocalReturnData.KTF) {
        return res.status(500).send(LocalReturnData.KReason);
    }

    next();
};

export { GetFunc };
