import fs from "fs";
import ParamsJson from '../../../CommonFuncs/params.json' with {type: 'json'};

const StartFunc = ({ inKey, inValue }) => {
  const LocalFileName = ParamsJson.TableName;
  const LocalDataPath = ParamsJson.DataPath;
  let LocalKey = inKey;
  let LocalValue = inValue

  const filePath = `${LocalDataPath}/${LocalFileName}.json`;
  let LocalReturnObject = { KTF: false };

  try {
    let data = {};

    if (fs.existsSync(filePath)) {
      data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    }

    if (LocalKey in data) {
      LocalReturnObject.KReason = "Key already present";

      return LocalReturnObject;
    };
    data[LocalKey] = LocalValue;

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');

    LocalReturnObject.KTF = true;
    LocalReturnObject.SuccessText = `Inserted ${LocalKey} into ${LocalFileName}.json successfully`;

    return LocalReturnObject;

  } catch (err) {
    console.error('Error:', err);
    LocalReturnObject.KReason = 'Error writing data';
    return LocalReturnObject;
  }
};

export { StartFunc };
