import { StartFunc as StartFuncFromInsertToFile } from "../KFs/insertToFile.js";

let postDefaultFunc = ({ inUserName, inPassword }) => {
  let LocalFromLowDb = StartFuncFromInsertToFile({ inUserName, inPassword });

  return LocalFromLowDb;
};

export { postDefaultFunc };
