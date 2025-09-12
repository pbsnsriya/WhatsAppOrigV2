import {
    postFunc as postFuncFromRepo
} from '../Repos/entryFile.js';

let postFunc = async (req, res) => {
    if ("Uuid" in req.KeshavSoft === false) {
        res.status(500).send("Error from multer");
        return;
    };

    let LocalBody = req.body;
    var host = req.get('host');
    let protocol = req.protocol;
    let LocalDomainName = `${protocol}://${host}`;

    const LocalFromRepo = await postFuncFromRepo({
        inDomainName: LocalDomainName,
        inDataToInsert: LocalBody,
        inImageName: req.KeshavSoft.Uuid
    });

    if (LocalFromRepo.KTF === false) {
        res.status(409).send(LocalFromRepo.KReason);
        return;
    };

    res.set('Content-Type', 'text/plain');
    res.send(LocalFromRepo.SuccessText);
};

export {
    postFunc
};