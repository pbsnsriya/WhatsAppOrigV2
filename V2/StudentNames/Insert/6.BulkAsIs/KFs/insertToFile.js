import fs from "fs";
import ParamsJson from "../../../CommonFuncs/params.json" with { type: "json" };

const StartFunc = ({ inRequestBody }) => {
  const LocalFileName = ParamsJson.TableName;
  const LocalDataPath = ParamsJson.DataPath;
  const filePath = `${LocalDataPath}/${LocalFileName}.json`;

  let LocalReturnObject = { KTF: false };

  try {
    if (!fs.existsSync(filePath)) {
      LocalReturnObject.KReason = `File ${LocalFileName}.json does not exist in ${LocalDataPath} folder.`;
      console.warn(LocalReturnObject.KReason);
      return LocalReturnObject;
    }

    const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
    const existingPKs = data.map(({ pk }) => pk).filter(pk => pk !== undefined).map(Number);
    let currentMaxPk = Math.max(...existingPKs, 0);

    const insertedPKs = [];

    for (const item of inRequestBody) {
      currentMaxPk += 1;
      const newItem = { ...item, pk: currentMaxPk };
      data.push(newItem);
      insertedPKs.push(currentMaxPk);
    }

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");

    LocalReturnObject.KTF = true;
    LocalReturnObject.SuccessText = `Inserted ${insertedPKs.length} items with PKs [${insertedPKs.join(", ")}] into ${LocalFileName}.json successfully`;

    return LocalReturnObject;

  } catch (err) {
    console.error("Error:", err);
    LocalReturnObject.KReason = "Exception occurred during insertion.";
    return LocalReturnObject;
  }
};

export { StartFunc };
