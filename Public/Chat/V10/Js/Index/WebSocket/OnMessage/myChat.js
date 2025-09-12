let StartFunc = ({ inData }) => {
    // console.log("inData : ", inData);

    inData.forEach(element => {
        let messageText;

        if (typeof element.data === "string") {
            messageText = element.data;

            if (element.InOut === "Out") {
                addOutMessage(messageText, element.name ? element.name.charAt(0).toUpperCase() : "B");
            } else {
                addInMessage(messageText, element.name ? element.name.charAt(0).toUpperCase() : "A");
            };

        } else if (typeof element.data === "object") {
            // Render object as pretty JSON
            messageText = element.data;
            // console.log("------ : ", messageText.Type, messageText.Type === "sendMessage");

            switch (messageText.Type) {
                case "sendMessage":
                    // console.log("------sdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdf");

                    addInMessage(`${messageText.fromId} : ${messageText.Message}`, "F");
                    break;
                default:
                    break;
            };
        } else {
            messageText = String(element.data);

            if (element.InOut === "Out") {
                addOutMessage(messageText, element.name ? element.name.charAt(0).toUpperCase() : "B");
            } else {
                addInMessage(messageText, element.name ? element.name.charAt(0).toUpperCase() : "A");
            };
        };

        // if (element.InOut === "Out") {
        //     addOutMessage(messageText, element.name ? element.name.charAt(0).toUpperCase() : "B");
        // } else {
        //     console.log("------ : ", messageText, element);

        //     if (messageText === "myChat") {
        //         addInMessage(messageText, element.name ? element.name.charAt(0).toUpperCase() : "Aaaaaaaaaaaaaaa");
        //     } else {
        //         addInMessage(messageText, element.name ? element.name.charAt(0).toUpperCase() : "A");
        //     };
        // };
    });
};


// Basic function to add incoming messages (left side)
function addInMessage(messageText, avatar = 'A') {
    const chatContainer = document.querySelector('.grid.grid-cols-12');

    // Clone incoming message template
    const template = document.getElementById('in-message-template');
    const messageElement = template.content.cloneNode(true);

    // Set message content and avatar
    messageElement.querySelector('.message-text').textContent = messageText;
    messageElement.querySelector('.message-avatar').textContent = avatar;

    // Add to chat
    chatContainer.appendChild(messageElement);

    // Scroll to bottom
    scrollToBottom();
}

// Basic function to add outgoing messages (right side)
function addOutMessage(messageText, avatar = 'A') {
    const chatContainer = document.querySelector('.grid.grid-cols-12');

    // Clone outgoing message template
    const template = document.getElementById('out-message-template');
    const messageElement = template.content.cloneNode(true);

    // Set message content and avatar
    messageElement.querySelector('.message-text').textContent = messageText;
    messageElement.querySelector('.message-avatar').textContent = avatar;

    // Add to chat
    chatContainer.appendChild(messageElement);

    // Scroll to bottom
    scrollToBottom();
}

// Helper function to scroll to bottom
function scrollToBottom() {
    const chatArea = document.querySelector('.overflow-x-auto');
    if (chatArea) {
        chatArea.scrollTop = chatArea.scrollHeight;
    }
}









export { StartFunc };
