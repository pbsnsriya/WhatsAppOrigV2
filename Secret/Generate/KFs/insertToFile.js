import fs from "fs";

import ParamsJson from './params.json' with {type: 'json'};

const StartFunc = ({LocalCoumnSecret}) => {
  const LocalFileName = ParamsJson.TableName;
  const LocalDataPath = ParamsJson.DataPath;

  let LocalinDataToInsert = {Secret : LocalCoumnSecret};

  const filePath = `${LocalDataPath}/${LocalFileName}.json`;
  let LocalReturnObject = {};
  LocalReturnObject.KTF = false;

  try {
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

      let LocalRemoveUndefined = data.find(element => JSON.stringify(element) === JSON.stringify(LocalinDataToInsert));

      if (!LocalRemoveUndefined) {
        return LocalReturnObject
      };

      LocalReturnObject.KTF = true;
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

export { StartFunc };