import UrlJson from './url.json' with {type: 'json'};
import commonConfig from '../../../Config.json' with {type: 'json'};

let StartFunc = async () => {
    let jVarLocalFilterString = getUrlQueryParams({ inGetKey: "pk" });

    let jVarTableName = commonConfig.TableName;

    let jVarLoclRowDataUrl = UrlJson.RowDataUrl;

    let jVarLocalFetchUrl = `${jVarTableName}/${jVarLoclRowDataUrl}/${jVarLocalFilterString}`;

    let response = await fetch(jVarLocalFetchUrl);

    return response;
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc };