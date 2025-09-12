import fs from "fs";
import ParamsJson from '../../../CommonFuncs/params.json' with { type: 'json' };

const StartFunc = ({ inRequestBody, inKey }) => {
  const LocalFileName = ParamsJson.TableName;
  const LocalDataPath = ParamsJson.DataPath;
  const filePath = `${LocalDataPath}/${LocalFileName}.json`;

  let LocalReturnObject = { KTF: false };

  try {
    const schemaColumns = ParamsJson.Columns;

    if (!schemaColumns.includes(inKey)) {
      LocalReturnObject.KReason = `Column '${inKey}' not found in params.json for table '${LocalFileName}'`;
      return LocalReturnObject;
    }

    if (!fs.existsSync(filePath)) {
      LocalReturnObject.KReason = `File ${LocalFileName}.json does not exist in ${LocalDataPath} folder.`;
      return LocalReturnObject;
    }

    const data = JSON.parse(fs.readFileSync(filePath, "utf8"));

    let LocalArrayPk = data.map(element => element.pk).filter(el => el !== undefined);
    let numberArray = LocalArrayPk.map(Number);
    let MaxPk = Math.max(...numberArray, 0) + 1;

    let LocalInsertData = {};
    schemaColumns.forEach(col => {
      if (col === inKey) {
        LocalInsertData[col] = inRequestBody;
      } else {
        LocalInsertData[col] = {};   
      }
    });

    LocalInsertData.pk = MaxPk;
    LocalInsertData.ServerInsertedTimeStamp = new Date();

    data.push(LocalInsertData);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");

    LocalReturnObject.KTF = true;
    LocalReturnObject.SuccessText = `Inserted pk ${MaxPk} into ${LocalFileName}.json successfully`;
    LocalReturnObject.Data = LocalInsertData;

    return LocalReturnObject;

  } catch (err) {
    console.error("Error:", err);
    LocalReturnObject.KReason = err.message;
    return LocalReturnObject;
  }
};

export { StartFunc };
