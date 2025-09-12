import KeysJson from './keys.json' with { type: 'json' };

let StartFunc = () => {
    let jVarLocalForm = document.getElementById("FormId");

    const LocalBodyAsArray = [];

    LocalBodyAsArray.push("Credit");
    LocalBodyAsArray.push("Debit");

    KeysJson.body = JSON.stringify(LocalBodyAsArray);

    return KeysJson;
};

export { StartFunc };
