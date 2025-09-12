import ConfigJson from '../../../../../Config.json' with {type: 'json'};

const StartFunc = async ({ inRowpk, inItemSerial }) => {
    const jVarLocalDeleteUrl = ConfigJson.ApiUrls.ItemsTable.DeleteUrl;
    const jVarLocalRoutePath = ConfigJson.routePath;

    let jVarLocalBranchName = localStorage.getItem("BranchName");
    const jVarLocalFindKey = "ItemsInOrder";
    const jVarLocalSubId = inItemSerial;

    let LocalUrl = jVarLocalDeleteUrl.replace("$tableName", jVarLocalBranchName).replace(":Id", inRowpk).replace(":inKey", jVarLocalFindKey).replace(":SubId", jVarLocalSubId);

    let LocalFetchObj = {
        method: "DELETE",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    };

    let responce = await fetch(`/${jVarLocalRoutePath}/${LocalUrl}`, LocalFetchObj);

    return responce;
};

export { StartFunc };