import {
    postDefaultFunc as postDefaultFuncFromRepo
} from '../Repos/entryFile.js';

let postFilterDataFromBodyFunc = async (req, res) => {
    let LocalKey = req.params.Key;
    let LocalRowPk = req.params.RowPk;
    let LocalKeyName = req.params.KeyName;

    let LocalFromRepo = await postDefaultFuncFromRepo({
        inKey: LocalKey,
        inRowPk: LocalRowPk,
        inKeyName: LocalKeyName
    });

    if (LocalFromRepo.KTF === false) {
        res.status(409).send(LocalFromRepo.KReason);
        return;
    };

    res.status(200).send(LocalFromRepo.JsonData);
};

export {
    postFilterDataFromBodyFunc
};