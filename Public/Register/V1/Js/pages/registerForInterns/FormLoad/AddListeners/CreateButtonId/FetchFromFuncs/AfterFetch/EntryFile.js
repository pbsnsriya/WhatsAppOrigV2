let StartFunc = () => {
    let jVarLocalYouserName = jFLocalyourUsername();
    let jVarLocalMail = jFLocalEmailId();

    const url = new URL(window.location.href);
    const params1 = new URLSearchParams(url.search);
    let NewURl = new URL("./checkMailV1.html", url);
    const new_url = new URL(`${NewURl.href}?${params1}`);
    new_url.searchParams.append('userName', jVarLocalYouserName);
    new_url.searchParams.append('userMail', jVarLocalMail);

    window.location.href = new_url.href;
};

let jFLocalyourUsername = () => {
    let jVarLocalyourUsername = 'StudentNameId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalyourUsername);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

let jFLocalEmailId = () => {
    let jVarLocalEmailId = 'EmailId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalEmailId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

export { StartFunc };