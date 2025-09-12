import { StartFunc as StartFuncFetchFuncs } from './fetchFuncs.js';

const StartFunc = async () => {
    let localResponse = await StartFuncFetchFuncs();
    let jVarLocalResponse = await localResponse;

    if (jVarLocalResponse.status === 200) {
        let jVarLocalDataAsJson = await jVarLocalResponse.json();
        return await jVarLocalDataAsJson;
    };
};

export { StartFunc };
