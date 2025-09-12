import KeysJson from './keys.json' with { type: 'json' };

let StartFunc = () => {
    let jVarLocalForm = document.getElementById("FormId");

    const serializedData = jFLocalSerializeFormData(jVarLocalForm);
    const upperCasedData = {};

    for (const key in serializedData) {
        if(key === "Password"){
            upperCasedData[key] = parseInt(serializedData[key]);
        } else {
            upperCasedData[key] = serializedData[key];
        }
    }

    KeysJson.body = JSON.stringify(upperCasedData);

    return KeysJson;
};

function jFLocalSerializeFormData(form) {
    const formData = new FormData(form);
    const serializedData = {};

    for (const [name, value] of formData) {
        const trimmedValue = value.trim();

        if (serializedData[name]) {
            if (!Array.isArray(serializedData[name])) {
                serializedData[name] = [serializedData[name]];
            }
            serializedData[name].push(trimmedValue);
        } else {
            serializedData[name] = trimmedValue;
        }
    }

    return serializedData;
}

export { StartFunc };
