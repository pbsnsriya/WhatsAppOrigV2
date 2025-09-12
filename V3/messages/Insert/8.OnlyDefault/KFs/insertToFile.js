import fs from "fs";
import path from "path";

import ParamsJson from '../../../CommonFuncs/params.json' with {type: 'json'};

const StartFunc = () => {
  const LocalFileName = ParamsJson.TableName;
  const LocalDataPath = ParamsJson.DataPath;

  const schemaPath = path.join("Schemas", `${LocalFileName}.json`);

  if (!fs.existsSync(schemaPath)) {
    throw new Error(`Schema file for ${LocalFileName} not found at ${schemaPath}`);
  }

  const SchemaJson = JSON.parse(fs.readFileSync(schemaPath, "utf8"));

  const LocalColumns = SchemaJson.columns.map(col => col.field);

  let LocalinDataToInsert = {};
  LocalColumns.forEach(col => {
    LocalinDataToInsert[col] = {};
  });

  const filePath = `${LocalDataPath}/${LocalFileName}.json`;
  let LocalReturnObject = { KTF: false };

  try {
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      let LocalArrayPk = data.map(element => element.pk);

      let LocalRemoveUndefined = LocalArrayPk.filter(element => element !== undefined);
      let numberArray = LocalRemoveUndefined.map(Number);
      let MaxPk = Math.max(...numberArray, 0) + 1;

      let LocalInsertData = {
        ...LocalinDataToInsert,
        pk: MaxPk,
        ServerInsertedTimeStamp: new Date()
      };

      data.push(LocalInsertData);

      fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');

      LocalReturnObject.KTF = true;
      LocalReturnObject.SuccessText = `Inserted pk ${MaxPk} into ${LocalFileName}.json successfully`;

      return LocalReturnObject;
    } else {
      LocalReturnObject.KReason = `File ${LocalFileName}.json does not exist in ${LocalDataPath} folder.`;
      console.warn(LocalReturnObject.KReason);

      return LocalReturnObject;
    }
  } catch (err) {
    console.error('Error:', err);
  }

  return LocalReturnObject;
};

export { StartFunc };
