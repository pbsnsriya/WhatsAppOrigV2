import {
    postDefaultFunc as postDefaultFuncFromRepo
} from '../Repos/entryFile.js';

let postFilterDataFromBodyFunc = (req, res) => {
    let LocalColumnName = req.params.ColumnName;

    let LocalFromRepo = postDefaultFuncFromRepo({
        inColumnName: LocalColumnName
    });

    if (LocalFromRepo.KTF === false) {
        res.status(409).send(LocalFromRepo.KReason);
        return;
    };

    res.set('Content-Type', 'text/plain');
    res.send(LocalFromRepo.JsonData);
};

export {
    postFilterDataFromBodyFunc
};