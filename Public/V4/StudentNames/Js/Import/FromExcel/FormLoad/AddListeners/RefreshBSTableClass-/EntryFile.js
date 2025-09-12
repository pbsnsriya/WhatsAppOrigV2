import { StartFunc as StartFuncFuncToRun } from "./ButtonClickFunc.js";

let StartFunc = () => {
    const LocalbuttonUploadId = document.getElementById("UploadId");

    LocalbuttonUploadId.addEventListener("click", StartFuncFuncToRun);
};

export { StartFunc };