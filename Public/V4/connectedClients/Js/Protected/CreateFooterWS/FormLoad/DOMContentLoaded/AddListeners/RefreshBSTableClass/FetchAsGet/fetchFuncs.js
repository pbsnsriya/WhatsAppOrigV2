import getUrlJson from './getUrl.json' with {type: 'json'};
import CommonTableName from '../../../../../../Config.json' with {type: 'json'};

let StartFunc = async () => {
    let jVarLocalCommonTable = CommonTableName.TableName;
    let jVarLocalGetEndPoint = getUrlJson.GetEndPoint;
    let jVarLocalFetchUrl = `${jVarLocalCommonTable}/${jVarLocalGetEndPoint}`

    let response = await fetch(jVarLocalFetchUrl);

    return await response;
};

export { StartFunc };

