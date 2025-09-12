import KeysJson from './Keys.json' with {type: 'json'};
import { StartFunc as StartFuncPrepareBody } from "./PrepareBody.js";

let StartFunc = ({ inCurrentTarget }) => {
    KeysJson.body = JSON.stringify(StartFuncPrepareBody({ inCurrentTarget }));

    return KeysJson;
};



export { StartFunc };