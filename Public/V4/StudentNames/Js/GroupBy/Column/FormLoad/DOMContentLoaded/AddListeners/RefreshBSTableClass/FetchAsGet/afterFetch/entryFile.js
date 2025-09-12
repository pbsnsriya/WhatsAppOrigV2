import { StartFunc as Status200 } from "./status200.js";
import { StartFunc as Status409 } from "./status409.js";

let StartFunc = async ({ inResponse }) => {
    let jVarLocalResponse = await inResponse;

    if (jVarLocalResponse.status === 200) {
        let jVarLocalDataAsJson = await jVarLocalResponse.json();
        Status200({ inResponseAsJson: jVarLocalDataAsJson });
    };

    if (jVarLocalResponse.status === 409) {
        let jVarLocalSavedPk = await jVarLocalResponse.text();
        Status409({ inResponse: jVarLocalSavedPk });
    };
};

export { StartFunc };