import ConfigJson from "../../../../../Config.json" with { type: "json" };

let StartFunc = ({ inFromResponse }) => {
    const jVarLocalFromResponse = inFromResponse;
    const jVarLocalPhoneUrl = ConfigJson.PhoneUrl;

    if (confirm("Already Registered, Call")) {
        var url = jVarLocalPhoneUrl;
        var win = window.open(url, '_blank');  ///similar to above solution
        win.focus();
    };
};

export { StartFunc };