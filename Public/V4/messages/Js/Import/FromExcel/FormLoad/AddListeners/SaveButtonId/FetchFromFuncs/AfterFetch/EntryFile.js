import { StartFunc as Status200 } from "./Status200.js";
import { StartFunc as Status500 } from "./Status500.js";

let StartFunc = async ({ inResponse }) => {
    let jVarLocalResponse = inResponse;

    if (jVarLocalResponse.status === 200) {
        let jVarLocalDataAsJson = await jVarLocalResponse.json();

        Status200({ inResponseAsJson: jVarLocalDataAsJson });
    };

    if (jVarLocalResponse.status === 500) {
        let jVarLocalFromResponse = await jVarLocalResponse.text();

        Status500({ inResponseAsText: jVarLocalFromResponse });
    };
};

export { StartFunc };