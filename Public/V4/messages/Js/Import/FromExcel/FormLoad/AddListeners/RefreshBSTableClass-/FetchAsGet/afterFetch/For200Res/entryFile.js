import { StartFunc as StartFuncBuildBsTable } from "./BuildBsTable/entryFile.js";

let StartFunc = ({ inResponseAsJson }) => {
    StartFuncBuildBsTable({ inResponseAsJson });
};

export { StartFunc };