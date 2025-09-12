import { StartFunc as StartFuncFromInsertToFile } from '../KFs/insertToFile.js';
import { StartFunc as StartFuncFromRenameImage } from '../KFs/renameImage.js';

let postDefaultFunc = async ({ inDomainName, inDataToInsert, inImageName }) => {
    let LocalFromLowDb = StartFuncFromInsertToFile({ inRequestBody: inDataToInsert });

    if (LocalFromLowDb.KTF === false) {
        return LocalFromLowDb;
    };

    const LocalFromSendMail = await StartFuncFromRenameImage({
        inDomainName, inDataToInsert,
        insertedPk: LocalFromLowDb.insertedPk, inImageName
    })

    return await LocalFromSendMail;
};

export {
    postDefaultFunc
};