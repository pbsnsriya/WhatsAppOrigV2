let StartFunc = ({ inResponseAsText }) => {
    jFLocalDisplayShowServerErrorId();

    jFLocalToInputServerErrorToShowId(inResponseAsText);
    LocalFuncChangeCardColour();
    LocalFuncSetFocus();
};

let jFLocalToInputServerErrorToShowId = (inValue) => {
    let jVarLocalHtmlId = 'ServerErrorToShowId';
    let jVarLocalServerErrorToShowId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalServerErrorToShowId === null === false) {
        jVarLocalServerErrorToShowId.innerHTML = inValue;
    };
};

let jFLocalDisplayShowServerErrorId = () => {
    let jVarLocalHtmlId = 'ServerErrorId';
    let jVarLocalServerErrorId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalServerErrorId === null === false) {
        jVarLocalServerErrorId.style.display = '';
    };
};

const LocalFuncChangeCardColour = () => {
    let jVarLocalCardHtmlId = document.getElementById('CardHtmlId');
    jVarLocalCardHtmlId.classList.add("bg-yellow-100");
};

const LocalFuncSetFocus = () => {
    let jVarLocalForm = document.getElementById("FormId");
    let jVarLocalFirstInput = jVarLocalForm.querySelector("input");
    jVarLocalFirstInput.focus();
};

export { StartFunc };