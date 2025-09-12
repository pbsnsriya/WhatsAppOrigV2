let StartFunc = ({ inResponse }) => {
    const url = new URL(window.location.href);
    let NewURl = new URL("./alterWs.html", url);
    const new_url = new URL(`${NewURl.href}`);
    window.location.href = new_url.href;
};

export { StartFunc };