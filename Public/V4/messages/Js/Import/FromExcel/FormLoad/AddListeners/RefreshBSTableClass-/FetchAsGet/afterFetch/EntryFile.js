import { StartFunc as Status200 } from "./Status200.js";
import { StartFunc as Status500 } from "./Status500.js";

let StartFunc = async ({ inResponse }) => {
    let jVarLocalResponse = await inResponse;

    if (jVarLocalResponse.status === 200) {
        let jVarLocalDataAsJson = await jVarLocalResponse.json();
        Status200({ inResponseAsJson: jVarLocalDataAsJson });
    };

    if (jVarLocalResponse.status === 500) {
        let jVarLocalSavedPk = await jVarLocalResponse.text();
        Status500({ inResponse: jVarLocalSavedPk });
    };
};

export { StartFunc };