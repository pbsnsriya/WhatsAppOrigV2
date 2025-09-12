import { StartFunc as sendMessage } from "./sendMessage.js";

let StartFunc = (event) => {
    try {
        let jVarLocalParsedData = JSON.parse(event.data);
        console.log("jVarLocalParsedData : ", jVarLocalParsedData);
        switch (jVarLocalParsedData?.Type) {
            case "wAProfile":
                wAProfile({ inData: jVarLocalParsedData.res });
                break;
            case "returnOnlineClients":
                // Clear previous users
                const tbody = document.querySelector("#OpenUsersId");
                if (tbody) tbody.innerHTML = "";
                jVarLocalParsedData.res.forEach(element => {
                    jFLocalAddToDom({
                        inName: element.Name,
                        inId: element.id
                    });

                    // LocalFuncAddUser({ inName: element.Name });
                });
                break;
            default:
                break;
        };
    } catch (error) {
        // jFLocalShowMessage({ inMessage: event.data });
    };
};

const LocalFuncAddUser = ({ inName, inTimeSpan }) => {
    if ("content" in document.createElement("template")) {
        const tbody = document.querySelector("#OpenUsersId");
        const template = document.querySelector("#TemplateForUserId");

        // Clone the new row and insert it into the table
        const clone = template.content.cloneNode(true);
        let td = clone.querySelectorAll("h3");
        td[0].textContent = inName;

        let p = clone.querySelector("p");
        p.textContent = inTimeSpan;

        tbody.appendChild(clone);
    } else {
        // Find another way to add the rows to the table because
        // the HTML template element is not supported.
    };
};

let jFLocalToInputUserNameId = (inValue) => {
    let jVarLocalHtmlId = 'UserNameId';
    let jVarLocalUserNameId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalUserNameId === null === false) {
        jVarLocalUserNameId.innerHTML = inValue;
    };
};

let jFLocalToInputMobileNumberId = (inValue) => {
    let jVarLocalHtmlId = 'MobileNumberId';
    let jVarLocalMobileNumberId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalMobileNumberId === null === false) {
        jVarLocalMobileNumberId.innerHTML = inValue;
    };
};

const wAProfile = ({ inData }) => {
    jFLocalToInputUserNameId(inData.pushname);
    jFLocalToInputMobileNumberId(inData.me.user);
};

const jFLocalAddToDom = ({ inName, inId }) => {
    const conversationList = document.getElementById('active-convos-list');
    const conversationTemplate = document.getElementById('convo-template');

    const randomName = inName;

    // Clone the template for a new conversation
    const newConvo = conversationTemplate.content.cloneNode(true);
    // Set the name and initial
    newConvo.querySelector('.convo-name').textContent = randomName;
    newConvo.querySelector('.convo-initial').textContent = randomName.charAt(0).toUpperCase();
    newConvo.querySelector('p').textContent = inId;

    // Add the new conversation to the list
    conversationList.appendChild(newConvo);
};


export { StartFunc };