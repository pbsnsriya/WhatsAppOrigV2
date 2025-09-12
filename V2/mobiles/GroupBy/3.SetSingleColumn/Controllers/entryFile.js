import {
    getDefaultFunc as getDefaultFuncFromRepo
} from '../Repos/entryFile.js';

let getFilterDataFromBodyFunc = (req, res) => {
    let LocalColumnName = req.params.ColumnName;

    let LocalFromRepo = getDefaultFuncFromRepo({
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
    getFilterDataFromBodyFunc
};