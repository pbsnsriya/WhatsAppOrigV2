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

  let LocalinDataToInsert = {};
  SchemaJson.columns.forEach(col => {
    switch (col.type) {
      case "number":
      case "int":
      case "float":
      case "decimal":
        LocalinDataToInsert[col.field] = 0;
        break;

      case "string":
      case "varchar":
      case "text":
        LocalinDataToInsert[col.field] = "";
        break;

      case "boolean":
      case "bool":
        LocalinDataToInsert[col.field] = false;
        break;

      case "array":
        LocalinDataToInsert[col.field] = [];
        break;

      case "object":
        LocalinDataToInsert[col.field] = {};
        break;

      case "date":
      case "datetime":
        LocalinDataToInsert[col.field] = new Date().toISOString();
        break;

      default:
        LocalinDataToInsert[col.field] = "";
        break;
    }
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
