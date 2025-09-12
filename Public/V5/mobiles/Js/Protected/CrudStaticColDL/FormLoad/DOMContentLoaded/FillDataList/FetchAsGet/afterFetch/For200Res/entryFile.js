let StartFunc = ({ inResponseAsJson }) => {
    let jVarLocalHtmlDLEId = document.getElementById('HtmlDLEId-FarmerName');
    console.log("aaaaaaaaaaa : ", inResponseAsJson);

    inResponseAsJson.forEach(item => {
        const option = document.createElement('option');
        option.value = item;
        jVarLocalHtmlDLEId.appendChild(option);
    });
};

export { StartFunc };