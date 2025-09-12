import {
    GetFunc as GetFuncRepo
} from '../Repos/entryFile.js';

let GetFunc = (req, res) => {
    const LocalId = req.params.id;

    let LocalFromRepo = GetFuncRepo({ inId: LocalId });

    if (LocalFromRepo.KTF === false) {
        res.status(404).send(LocalFromRepo.KReason);

        return;
    };
    
    res.set('Content-Type', 'application/json');
    res.status(200).send(LocalFromRepo.JsonData);
};

export {
    GetFunc
};