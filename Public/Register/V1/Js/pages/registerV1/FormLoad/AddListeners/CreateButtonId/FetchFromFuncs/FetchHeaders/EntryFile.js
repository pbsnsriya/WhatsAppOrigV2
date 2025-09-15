import KeysJson from './Keys.json' with {type: 'json'};

let StartFunc = () => {
    let jVarLocalKeys = { ...KeysJson };

    jVarLocalKeys.body = {};

    jVarLocalKeys.body.StudentName = jFLocalStudentNameId();
    jVarLocalKeys.body.Mobile = jFLocalMobileId();
    jVarLocalKeys.body.Email = jFLocalEmailId();
    jVarLocalKeys.body = JSON.stringify(jVarLocalKeys.body);

    return jVarLocalKeys;
};

let jFLocalStudentNameId = () => {
    let jVarLocalStudentNameId = 'StudentNameId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalStudentNameId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

let jFLocalMobileId = () => {
    let jVarLocalMobileId = 'MobileId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalMobileId);

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

export { StartFunc }