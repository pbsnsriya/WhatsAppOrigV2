import KeysJson from './keys.json' with { type: 'json' };

let StartFunc = () => {
    let jVarLocalForm = document.getElementById("FormId");

    const serializedData = jFLocalSerializeFormData(jVarLocalForm);

    KeysJson.body = JSON.stringify(serializedData);

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
