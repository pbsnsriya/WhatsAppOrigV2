import { StartFunc as StartFuncFetchHeaders } from "./FetchHeaders/entryFile.js";
import UrlJson from "./url.json" with { type: "json" };
import commonConfig from '../../../../../../../Config.json' with {type: 'json'};

let StartFunc = async ({ inRowPk }) => {
    let jVarTableName = commonConfig.TableName;

    let LocalroutePath = UrlJson.DeleteUrl;

    let jVarLocalFetchHeaders = StartFuncFetchHeaders();

    let jVarLocalFetchUrl = `${jVarTableName}/${LocalroutePath}/${inRowPk}`;

    let response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaders);

    return await response;
};

export { StartFunc };

