import fs from "fs";
import ParamsJson from '../../../CommonFuncs/params.json' with {type: 'json'};

const StartFunc = ({ inPk, inBody }) => {
  const LocalFileName = ParamsJson.TableName;
  const LocalDataPath = ParamsJson.DataPath;

  let LocalReturnObject = { KTF: false };
  let filePath = `${LocalDataPath}/${LocalFileName}.json`;

  try {
    if (!fs.existsSync(filePath)) {
      LocalReturnObject.KReason = `File ${LocalFileName}.json does not exist in ${CommonDataPath} folder.`;
      return LocalReturnObject;
    }

    const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
    const indexToUpdate = data.findIndex((e) => e.pk === Number(inPk));


    if (indexToUpdate === -1) {
      LocalReturnObject.KReason = `Record not found with pk:'${inPk}'.`;
      return LocalReturnObject;
    }

    let LocalUpdateData = { ...data[indexToUpdate], ...inBody };

    // Inject pk back to inBody
    inBody.pk = Number(inPk);
    data[indexToUpdate] = LocalUpdateData;

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");

    LocalReturnObject.KTF = true;
    LocalReturnObject.JsonData = `Record updated successfully with pk :'${inPk}'.`;
  } catch (err) {
    LocalReturnObject.KReason = `Error: ${err.message}`;
    console.error("Error:", err);
  }

  return LocalReturnObject;
};

export { StartFunc };