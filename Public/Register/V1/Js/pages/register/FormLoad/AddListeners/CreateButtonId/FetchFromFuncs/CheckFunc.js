import acceptFileTypesJson from './acceptFileTypes.json' with {type: 'json'};

let StartFunc = () => {
    let jVarLocalForm = document.getElementById("FormId");
    let jVarLocalRequiredElements = jVarLocalForm.querySelectorAll("[required]");
    let jVarLocalReturnTF = true;

    jVarLocalRequiredElements.forEach(LoopItem => {
        if (LoopItem.value.trim().length === 0) {
            LoopItem.classList.add("is-invalid");
            jVarLocalReturnTF = false;
            return jVarLocalReturnTF;
        };

        LoopItem.classList.remove("is-invalid");
        LoopItem.classList.add("is-valid");
    });

    let jVarLocalFromSelectFile = jFLocalSelectFile();

    if (jVarLocalFromSelectFile === false) {
        return jVarLocalFromSelectFile;
    };

    return jVarLocalReturnTF;
};

let jFLocalSelectFile = () => {
    let fileInput = document.getElementById("formFile");
    let file = fileInput.files[0];
    console.log("aaaaaaaaaaaaaaa : ", file.type);

    if (acceptFileTypesJson.includes(file.type)) {
        return true;
    } else {
        alert(`Only ${acceptFileTypesJson.toString()} file types are accepted...`);
        return false;
    };
};

export { StartFunc }