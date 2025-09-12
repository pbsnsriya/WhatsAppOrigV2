import {
    postDefaultFunc as postDefaultFuncFromRepo
} from '../Repos/entryFile.js';

let postFilterDataFromBodyFunc = (req, res) => {
    let LocalRequestBody = req.body;
    let LocalParams = req.params;
    let LocalRowIndex = LocalParams.RowIndex;
    let LocalKeyName = LocalParams.KeyName;

    let LocalFromRepo = postDefaultFuncFromRepo({
        inRequestBody: LocalRequestBody, inRowIndex: LocalRowIndex, inKeyName: LocalKeyName
    });

    if (LocalFromRepo.KTF === false) {
        res.status(409).send(LocalFromRepo.KReason);
        return;
    };

    res.set('Content-Type', 'text/plain');
    res.send(LocalFromRepo.SuccessText);
};

export {
    postFilterDataFromBodyFunc
};