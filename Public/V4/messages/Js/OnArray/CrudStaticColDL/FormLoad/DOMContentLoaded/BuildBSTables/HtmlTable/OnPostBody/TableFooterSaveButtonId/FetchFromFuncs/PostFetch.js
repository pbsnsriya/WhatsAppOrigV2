import { StartFunc as StartFuncFetchHeaders } from "./FetchHeaders/EntryFile.js";
import UrlJson from "./url.json" with { type: "json" };
import ConfigJson from "../../../../../../../../Config.json" with { type: "json" };

let StartFunc = async ({ inCurrentTarget }) => {
    let jVarTableName = ConfigJson.TableName;
    let LocalroutePath = UrlJson.PostendPoint;

    let jVarLocalFetchHeaders = StartFuncFetchHeaders({ inCurrentTarget });
    let jVarLocalFetchUrl = `${jVarTableName}/${LocalroutePath}`;
    let response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaders);

    return await response;
};

export { StartFunc };

