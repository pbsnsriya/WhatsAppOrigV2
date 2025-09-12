import {
    PostFunc as PostFuncRepo
} from '../Repos/entryFile.js';

let PostFunc = (req, res) => {
    const LocalKey = req.body.inKey;
    const LocalValue = req.body.inValue;

    let LocalFromRepo = PostFuncRepo({ inKey: LocalKey, inValue: LocalValue });

    if (LocalFromRepo.KTF === false) {
        res.status(404).send(LocalFromRepo.KReason);

        return;
    };

    res.set('Content-Type', 'application/json');
    res.status(200).send(LocalFromRepo.JsonData);
};

export {
    PostFunc
};