import { StartFunc as StartFuncFileRead } from "../../../../CommonFuncs/fileRead.js";
import { StartFunc as StartFuncfileWrite } from "../../../../CommonFuncs/fileWrite.js";

const StartFunc = ({ inPk, inBody, inRowPk, inKeyName }) => {

  let LocalReturnObject = { KTF: false };

  let LocalFileRead = StartFuncFileRead();

  if (LocalFileRead.KTF === false) {
    LocalReturnObject = { ...LocalFileRead };
    return LocalReturnObject;
  };

  let LocalData = LocalFileRead.JsonData;

  try {

    const indexToFind = LocalData.findIndex((e) => e.pk === Number(inRowPk));

    if (indexToFind === -1) {
      LocalReturnObject.KReason = `Record not found with pk:'${inPk}'.`;
      return LocalReturnObject;
    }

    if (!Array.isArray(LocalData[indexToFind][inKeyName])) {
      LocalReturnObject.KReason = `${inKeyName} Key Not SubTable`;
      return LocalReturnObject;
    };

    const indexToUpdate = LocalData[indexToFind][inKeyName].findIndex((e) => e.pk === Number(inPk));


    let LocalUpdateData = { ...LocalData[indexToFind][inKeyName][indexToUpdate], ...inBody };

    // Inject pk back to inBody
    inBody.pk = Number(inPk);
    LocalData[indexToFind][inKeyName][indexToUpdate] = LocalUpdateData;

    let LocalUpdate = StartFuncfileWrite({ inData: LocalData });

    if (LocalUpdate.KTF === false) {
      LocalReturnObject = { ...LocalUpdate };
      return LocalReturnObject;
    };

    LocalReturnObject.KTF = true;
    LocalReturnObject.JsonData = `Record updated successfully with pk :'${inRowPk} KeyName :${inKeyName}, Subpk :${inPk} '.`;
  } catch (err) {
    LocalReturnObject.KReason = `Error: ${err.message}`;
    console.error("Error:", err);
  }

  return LocalReturnObject;
};

export { StartFunc };