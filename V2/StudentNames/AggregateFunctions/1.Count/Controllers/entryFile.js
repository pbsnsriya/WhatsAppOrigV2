import {
    GetFunc as GetFuncRepo
} from '../Repos/entryFile.js';

let GetFunc = (req, res) => {
    let LocalFromRepo = GetFuncRepo();

    if (LocalFromRepo.KTF === false) {
        res.status(404).send(LocalFromRepo.KReason);
        return;
    }

    const count = Array.isArray(LocalFromRepo.JsonData)
        ? LocalFromRepo.JsonData.length
        : 0;

    res.status(200).type('text/plain').send(`  ${count}`);
};

export {
    GetFunc
};
