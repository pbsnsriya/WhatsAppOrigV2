import {
    GetFunc as GetFuncRepo
} from '../Repos/entryFile.js';

let GetFunc = (req, res) => {
    const LocalKey = req.params.Key;

    let LocalFromRepo = GetFuncRepo({ inKey: LocalKey });

    if (LocalFromRepo.KTF === false) {
        res.status(404).send(LocalFromRepo.KReason);

        return;
    };

    res.set('Content-Type', 'application/text');
    res.status(200).send(LocalFromRepo.JsonData);
};

export {
    GetFunc
};