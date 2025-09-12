import getUrlJson from './getUrl.json' with {type: 'json'};

let StartFunc = async () => {
    let jVarLocalGetEndPoint = getUrlJson.GetEndPoint;
    let jVarLocalFetchUrl = `/V3/Farmers/${jVarLocalGetEndPoint}`

    let response = await fetch(jVarLocalFetchUrl);

    return await response;
};

export { StartFunc };

