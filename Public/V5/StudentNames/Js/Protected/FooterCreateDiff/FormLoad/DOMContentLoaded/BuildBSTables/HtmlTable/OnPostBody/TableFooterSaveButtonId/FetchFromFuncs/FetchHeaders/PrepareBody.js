const StartFunc = ({ inCurrentTarget }) => {
    const jVarLocalCurrentTarget = inCurrentTarget;
    const jVarLocalClosestTr = jVarLocalCurrentTarget.closest("tr");
    const jVarLocalInputs = jVarLocalClosestTr.querySelectorAll("input");

    let jVarLocalPostObject = jFLocalPreparePostBody({ inQuerySelectorAll: jVarLocalInputs });

    return jVarLocalPostObject
};

const jFLocalPreparePostBody = ({ inQuerySelectorAll }) => {
    let jVarLocalReturnObject = {};

    inQuerySelectorAll.forEach(LoopItem => {
        if (LoopItem.type === "number") {
            jVarLocalReturnObject[LoopItem.name] = parseFloat(LoopItem.value, 2);
        } else {
            jVarLocalReturnObject[LoopItem.name] = LoopItem.value;
        }

    });

    return JSON.stringify(jVarLocalReturnObject);
};

export { StartFunc }