let StartFunc = ({ inData }) => {
    const tbody = document.querySelector("#active-convos-list");
    if (tbody) tbody.innerHTML = "";

    inData.forEach((element) => {
        jFLocalAddToDom({
            inName: element.Name,
            inId: element.id,
        });

        let jVarLocalUserNameId = document.getElementById('UserNameId');
        const jVarLocalWebSocketId = jVarLocalUserNameId.dataset.webSocketId;

        if (element.id === jVarLocalWebSocketId) {
            // console.log("aaaaaaaaaaaaa");
            jFLocalToInputUserNameId(element.Name);
        };
    });
};

let jFLocalToInputUserNameId = (inValue) => {
    let jVarLocalHtmlId = 'UserNameId';
    let jVarLocalUserNameId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalUserNameId === null === false) {
        jVarLocalUserNameId.innerHTML = inValue;
    };
};

const jFLocalAddToDom = ({ inName, inId }) => {
    const conversationList = document.getElementById("active-convos-list");
    const conversationTemplate = document.getElementById("convo-template");

    const randomName = inName;

    // Clone the template for a new conversation
    const newConvo = conversationTemplate.content.cloneNode(true);
    // Set the name and initial
    newConvo.querySelector(".convo-name").textContent = randomName;
    newConvo.querySelector(".convo-initial").textContent = randomName
        .charAt(0)
        .toUpperCase();

    newConvo.querySelector("button").dataset.websocketid = inId;

    // Add the new conversation to the list
    conversationList.appendChild(newConvo);
};

export { StartFunc };
