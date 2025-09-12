import fs from "fs";

import ParamsJson from '../../../../CommonFuncs/params.json' with {type: 'json'};

const StartFunc = ({ inRowIndex, inKeyName, inRequestBody }) => {
  const LocalFileName = ParamsJson.TableName;
  const LocalDataPath = ParamsJson.DataPath;
  let LocalRowIndex = inRowIndex;
  let LocalKeyName = inKeyName;

  let LocalinDataToInsert = inRequestBody;

  const filePath = `${LocalDataPath}/${LocalFileName}.json`;
  let LocalReturnObject = {};
  LocalReturnObject.KTF = false;

  try {
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      let LocalRow = data.find(element => element.pk == LocalRowIndex);

      if (!LocalRow) {
        LocalReturnObject.KReason = `No Row Data ${LocalRowIndex}.`
        return LocalReturnObject;
      };

      if (!Array.isArray(LocalRow[LocalKeyName])) {
        LocalReturnObject.KReason = `${LocalKeyName} Key Not SubTable`;
        return LocalReturnObject;
      };
      let LocalArrayPk = LocalRow[LocalKeyName].map(element => element.pk);

      let LocalRemoveUndefined = LocalArrayPk.filter(function (element) {
        return element !== undefined;
      });

      let numberArray = LocalRemoveUndefined.map(Number);
      let MaxPk = Math.max(...numberArray, 0) + 1;

      let LocalInsertData = {
        ...LocalinDataToInsert, pk: MaxPk, Fk: LocalRowIndex, UuId: uuidv4(), DateTime: new Date().toISOString()
      };
      LocalRow[LocalKeyName].push(LocalInsertData)

      fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');

      LocalReturnObject.KTF = true;
      LocalReturnObject.SuccessText = `Inserted pk ${MaxPk} In To ${LocalKeyName} File: ${LocalFileName}.json successfully`;

      return LocalReturnObject;
    } else {
      LocalReturnObject.KReason = `File ${LocalFileName}.json does not exist in ${LocalDataPath} folder.`;
      console.warn(LocalReturnObject.KReason);

      return LocalReturnObject;
    };
  } catch (err) {
    console.error('Error:', err);
  };

  return LocalReturnObject;
};
function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0,
      v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

export { StartFunc };