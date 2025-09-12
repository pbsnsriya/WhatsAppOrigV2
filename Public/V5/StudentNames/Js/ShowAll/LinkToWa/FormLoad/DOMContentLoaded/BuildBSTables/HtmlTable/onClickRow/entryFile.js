const StartFunc = async (row, $element, field) => {
    if (field === "KS-WhatsApp") {
        const jVarLocalCurrentTr = $element[0];

        const selectElement = jVarLocalCurrentTr.querySelector("td select");

        const selectedIndex = selectElement.selectedIndex;
        const selectedText = selectElement.options[selectedIndex].text;

        // console.log("aaaaaaaaa : ", selectedText);

        const jVarLocalMobile = row.Mobile;
        const jVarLocalReplacePlus = jVarLocalMobile.replace("+", "");

        let jVarLocalToSendText = selectedText;

        if (selectedText === "Greeting.1") {
            jVarLocalToSendText = ["we are a startup based at Kakinada.",
                "We need to develop prototypes for few software ideas.",
                "We are inviting capable web full stack developers.",
                "Qualification : Passed Out/Final Year.",
                "CGPA: 8+",
                "Branch : CSE and its allied branches any.",
                "Bond : 1 year.",
                "Work From Home only.",
                "1 Developer needed.",
                "6 LPA.",
                "Tech stack : JAM Stack",
                "",
                "https://keshavsoft.com/Interns/selection.html",
                "",
                "if above not qualified ",
                "",
                "we are offering",
                "",
                "https://keshavsoft.com/Interns/KeshavSoft_Internship_Proposal.pdf",
                "",
                "",
                "Thank you;"];
        };

        if (selectedText === "Task1") {
            jVarLocalToSendText = `https://keshavsoft.com/Interns/task1_new.pdf`;
        };

        if (selectedText === "Task2") {
            jVarLocalToSendText = `https://keshavsoft.com/Interns/task2.pdf`;
        };

        if (selectedText === "Task3") {
            jVarLocalToSendText = `https://keshavsoft.com/Interns/task3.pdf`;
        };

        window.open(`https://api.whatsapp.com/send?phone=${jVarLocalMobile}&text=${jVarLocalToSendText}`, "");

        jFLocalChangeSelectValue({ inValue: selectedText, inHtmlElement: selectElement });


        // https://api.whatsapp.com/send?phone=+918143779221&text=Hi%20I%27m%20interested%20for%20BTECH/Diploma/MCA/MBA/MTech%20Course%20@Gandhi%20Institute%20for%20Technology(GIFT).%20Send%20me%20Prospectus%20and%20Fee%20Structure.
    };
};

const jFLocalChangeSelectValue = ({ inValue, inHtmlElement }) => {
    switch (inValue) {
        case "Greetings from KehavSoft":
            inHtmlElement.value = 'Have you applied for KeshavSoft?';

            break;
        case "ready for tasks now ?":
            inHtmlElement.value = 'Task1';

            break;
        case "Task1":
            inHtmlElement.value = 'deadline : today EOD, all the best 👍';

            break;
        case "Task2":
            inHtmlElement.value = 'deadline : tomorrow EOD, all the best 👍';

            break;
        case "Task3":
            inHtmlElement.value = 'deadline : tomorrow EOD, all the best 👍';

            break;
        default:
            break;
    };
};

export { StartFunc };