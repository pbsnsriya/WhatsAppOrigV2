import { StartFunc as StartFuncFetchHeaders } from "./FetchHeaders/entryFile.js";
import ConfigJson from "../../../../../../Config.json" with { type: "json" };
import UrlJson from "./url.json" with { type: "json" };

let StartFunc = async () => {
    const LocalStartRoute = ConfigJson.TableName;
    let LocalroutePath = UrlJson.PostUrl;

    let jVarLocalFetchHeaders = StartFuncFetchHeaders();
    let jVarLocalFetchUrl = `${LocalStartRoute}/${LocalroutePath}`;
    let response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaders);

    return await response;
};

export { StartFunc };

