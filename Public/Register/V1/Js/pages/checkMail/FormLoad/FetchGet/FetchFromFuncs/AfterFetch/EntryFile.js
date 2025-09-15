let StartFunc = ({ inFetchData }) => {
    console.log("inFetchData:", inFetchData);
    
    let jVarLocalYouserName = jFLocalyourUsername();
    const url = new URL(window.location.href);
    const params1 = new URLSearchParams(url.search);
    let NewURl = new URL("./validation.html", url);
    const new_url = new URL(`${NewURl.href}?${params1}`);
    new_url.searchParams.append('inyourUsername', jVarLocalYouserName);

    window.location.href = new_url.href;

    // window.location.href = "./login.html";
};

let jFLocalyourUsername = () => {
    let jVarLocalyourUsername = 'yourUsername'
    let jVarLocalHtmlId = document.getElementById(jVarLocalyourUsername);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

export { StartFunc };