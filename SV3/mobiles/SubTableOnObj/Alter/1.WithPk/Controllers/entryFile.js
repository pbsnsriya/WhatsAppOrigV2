import {
    postDefaultFunc as postDefaultFuncFromRepo
} from '../Repos/entryFile.js';

let postFilterDataFromBodyFunc = (req, res) => {
    let LocalPk = req.params.inPk;
    let LocalRowPk = req.params.RowPk;
    let LocalKeyName = req.params.KeyName;
    let LocalRequestBody = req.body;

    let LocalFromRepo = postDefaultFuncFromRepo({
        inBody: LocalRequestBody,
        inPk: LocalPk,
        inRowPk: LocalRowPk,
        inKeyName: LocalKeyName
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