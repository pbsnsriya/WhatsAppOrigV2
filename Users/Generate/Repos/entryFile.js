import { postDefaultFunc as postDefaultFuncFromDal } from "../Dals/entryFile.js";

let postDefaultFunc = ({ inUserName, inPassword }) => {
  let LocalFromDal = postDefaultFuncFromDal({ inUserName, inPassword });

  return LocalFromDal;
};

export { postDefaultFunc };
