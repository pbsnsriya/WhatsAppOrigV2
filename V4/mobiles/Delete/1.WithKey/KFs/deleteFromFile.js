import fs from "fs";
import ParamsJson from '../../../CommonFuncs/params.json' with { type: 'json' };

const StartFunc = ({ inKey }) => {
  const LocalFileName = ParamsJson.TableName;
  const LocalDataPath = ParamsJson.DataPath;
  let LocalKey = inKey;

  let LocalReturnObject = { KTF: false };
  const filePath = `${LocalDataPath}/${LocalFileName}.json`;

  try {
    if (!fs.existsSync(filePath)) {
      LocalReturnObject.JsonData = ` ${LocalFileName}.json File does not exist.`;
      return LocalReturnObject;
    }

    let data = JSON.parse(fs.readFileSync(filePath, "utf8"));
    const pk = String(inKey);

    if (!(LocalKey in data)) {
      LocalReturnObject.KReason = `No record found with key: ${LocalKey}`;
      return LocalReturnObject;
    }

    delete data[LocalKey];

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");

    LocalReturnObject.KTF = true;
    LocalReturnObject.JsonData = `Deleted successfully with key: ${LocalKey}`;
  } catch (err) {
    LocalReturnObject.KReason = `Error occurred: ${err.message}`;
    console.error("Error:", err);
  }

  return LocalReturnObject;
};

export { StartFunc };
