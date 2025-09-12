import { StartFunc as StartFuncFetchHeaders } from "./FetchHeaders/EntryFile.js";
// import UrlJson from "../../../../../Config.json" with { type: "json" };
import UrlJson from "../../../../../../OnArray/Config.json" with { type: "json" };

let StartFunc = async () => {
    let LocaltableName = UrlJson.TableName;

    let jVarLocalFetchHeaders = StartFuncFetchHeaders();
    let jVarLocalFetchUrl = `${LocaltableName}/Insert/BulkAsIs`;
    let response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaders);
    
    return await response;
};

export { StartFunc };

