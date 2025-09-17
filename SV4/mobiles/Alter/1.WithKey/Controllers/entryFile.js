import {
    postDefaultFunc as postDefaultFuncFromRepo
} from '../Repos/entryFile.js';

let postFilterDataFromBodyFunc = (req, res) => {
    let LocalKey = req.params.inKey;
    let LocalRequestBody = req.body.Value;

    let LocalFromRepo = postDefaultFuncFromRepo({
        inValue: LocalRequestBody,
        inKey: LocalKey
    });

    if (LocalFromRepo.KTF === false) {
        res.status(404).send(LocalFromRepo.KReason);
        return;
    };

    res.status(200).send(LocalFromRepo.JsonData);
};

export {
    postFilterDataFromBodyFunc
};