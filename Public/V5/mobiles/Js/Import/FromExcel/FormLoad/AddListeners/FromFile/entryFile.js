import { StartFunc as onChange } from "./onChange.js";

let StartFunc = () => {
  const fileInput = document.getElementById('FromFileId');

  fileInput.addEventListener('change', onChange);
};

export { StartFunc };