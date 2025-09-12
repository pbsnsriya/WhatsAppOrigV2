const StartFunc = ({inCurrentTarget}) => {
    const jVarLocalCurrentTarget = inCurrentTarget;
    const jVarLocalClosestTr = jVarLocalCurrentTarget.closest("tr");
    const jVarLocalInputs = jVarLocalClosestTr.querySelectorAll("input");

    let jVarLocalPostObject = jFLocalPreparePostBody({ inQuerySelectorAll: jVarLocalInputs });

    return jVarLocalPostObject
};

const jFLocalPreparePostBody = ({ inQuerySelectorAll }) => {
    let jVarLocalReturnObject = {};

    inQuerySelectorAll.forEach(LoopItem => {
        jVarLocalReturnObject[LoopItem.name] = LoopItem.value;
    });

    return jVarLocalReturnObject;
};

export { StartFunc }