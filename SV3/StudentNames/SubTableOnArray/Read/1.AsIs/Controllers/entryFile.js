import {
    GetFunc as GetFuncRepo
} from '../Repos/entryFile.js';

let GetFunc = (req, res) => {
    let LocalParams = req.params;
    let LocalRowIndex = LocalParams.RowIndex;
    let LocalKeyName = LocalParams.KeyName;
    let LocalFromRepo = GetFuncRepo({ inRowIndex: LocalRowIndex, inKeyName: LocalKeyName });

    if (LocalFromRepo.KTF === false) {
        res.status(404).send(LocalFromRepo.KReason);

        return;
    };

    res.status(200).json(LocalFromRepo.JsonData);
};

export {
    GetFunc
};