const StartFunc = ({ inRowKey }) => {
    console.log("StartFuncNav", inRowKey);
    
    const url = new URL(window.location.href);
    const params1 = new URLSearchParams(url.search);
    let NewURl = new URL("./update.html", url);
    const new_url = new URL(`${NewURl.href}?${params1}`);
    new_url.searchParams.append('Key', inRowKey);
    window.location.href = new_url.href;
};

export { StartFunc };
