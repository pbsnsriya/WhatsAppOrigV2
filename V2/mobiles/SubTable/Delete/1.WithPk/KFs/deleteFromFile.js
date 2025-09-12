import { StartFunc as StartFuncFileRead } from "../../../../CommonFuncs/fileRead.js";
import { StartFunc as StartFuncfileWrite } from "../../../../CommonFuncs/fileWrite.js";

const StartFunc = ({ inKey, inRowPk, inKeyName }) => {

  let LocalReturnObject = { KTF: false };
  let LocalFileRead = StartFuncFileRead();

  if (LocalFileRead.KTF === false) {
    LocalReturnObject = { ...LocalFileRead };
    return LocalReturnObject;
  };

  let LocalData = LocalFileRead.JsonData;

  try {

    const indexToFind = LocalData.findIndex(e => e.pk === parseInt(inRowPk));

    if (indexToFind === -1) {
      LocalReturnObject.KReason = `Not found data with pk:${inRowPk}.`;
      return LocalReturnObject;
    };

    if (!Array.isArray(LocalData[indexToFind][inKeyName])) {
      LocalReturnObject.KReason = `${inKeyName} Key Not SubTable`;
      return LocalReturnObject;
    };

    const LocalFindIndex = LocalData[indexToFind][inKeyName].findIndex((e) => e.pk === Number(inKey));

    LocalData[indexToFind][inKeyName].splice(LocalFindIndex, 1);

    LocalData[indexToFind][inKeyName] = LocalData[indexToFind][inKeyName].map(item =>
      Object.fromEntries(
        Object.entries(item).filter(([key, value]) => value !== null)
      )
    );

    let LocalUpdate = StartFuncfileWrite({ inData: LocalData });

    if (LocalUpdate.KTF === false) {
      LocalReturnObject = { ...LocalUpdate };
      return LocalReturnObject;
    };

    LocalReturnObject.KTF = true;
    LocalReturnObject.JsonData = `Deleted successfully with RowPk ${inRowPk}, KeyName : ${inKeyName} pk:${inKey}`;
  } catch (err) {
    LocalReturnObject.KReason = `Error occurred: ${err.message}`;
    console.error("Error:", err);
  }

  return LocalReturnObject;
};

export { StartFunc };