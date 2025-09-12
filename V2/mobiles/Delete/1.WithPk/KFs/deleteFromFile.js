import fs from "fs";
import ParamsJson from '../../../CommonFuncs/params.json' with {type: 'json'};

const StartFunc = ({ inKey }) => {
  const LocalFileName = ParamsJson.TableName;
    const LocalDataPath = ParamsJson.DataPath;

  let LocalReturnObject = { KTF: false };

  const filePath = `${LocalDataPath}/${LocalFileName}.json`;

  try {
    if (!fs.existsSync(filePath)) {
      LocalReturnObject.JsonData = `key : ${inKey} Row Deleted Successfully`;

      return LocalReturnObject;
    }

    let data = JSON.parse(fs.readFileSync(filePath, "utf8"));

    const LocalFindIndex = data.findIndex(e => e.pk === parseInt(inKey));

    if (LocalFindIndex === -1) {
      LocalReturnObject.KReason = `Not found data with pk:${inKey}.`;
      return LocalReturnObject;
    }

    data.splice(LocalFindIndex, 1);

    data = data.map(item =>
      Object.fromEntries(
        Object.entries(item).filter(([key, value]) => value !== null)
      )
    );

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");

    LocalReturnObject.KTF = true;
    LocalReturnObject.JsonData = `Deleted successfully with pk:${inKey}`;
  } catch (err) {
    LocalReturnObject.KReason = `Error occurred: ${err.message}`;
    console.error("Error:", err);
  }

  return LocalReturnObject;
};

export { StartFunc };