import { StartFunc as StartFuncFileRead } from "../../../../CommonFuncs/fileRead.js";

let StartFunc = ({ inRowIndex, inKeyName }) => {
    let LocalReturnData = { KTF: false };
    let LocalFileRead = StartFuncFileRead();

    if (LocalFileRead.KTF === false) {
        LocalReturnData = { ...LocalFileRead };
        return LocalReturnData;
    }

    try {
        const LoalRowData = LocalFileRead.JsonData.find(el => el.pk == inRowIndex);

        if (!LoalRowData) {
            LocalReturnData.KReason = `No Row Data with index ${inRowIndex}`;
            return LocalReturnData;
        }

        if (!Array.isArray(LoalRowData[inKeyName])) {
            LocalReturnData.KReason = `${inKeyName} Key Not SubTable`;
            return LocalReturnData;
        }

        LocalReturnData.KTF = true;
        LocalReturnData.JsonData = LoalRowData[inKeyName];
        return LocalReturnData;
    } catch (err) {
        console.warn(LocalReturnData.KReason);
        return LocalReturnData;
    }
};

export { StartFunc };
