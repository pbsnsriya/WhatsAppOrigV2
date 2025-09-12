const StartFunc = async (row, $element, field) => {
    if (field === "KS-WhatsApp") {
        const jVarLocalMobile = row.Mobile;
        const jVarLocalReplacePlus = jVarLocalMobile.replace("+", "");
        const jVarLocalToSendText = "Greetings from KeshavSoft";

        window.open(`https://api.whatsapp.com/send?phone=${jVarLocalMobile}&text=${jVarLocalToSendText}`, "");

        // https://api.whatsapp.com/send?phone=+918143779221&text=Hi%20I%27m%20interested%20for%20BTECH/Diploma/MCA/MBA/MTech%20Course%20@Gandhi%20Institute%20for%20Technology(GIFT).%20Send%20me%20Prospectus%20and%20Fee%20Structure.
    };
};

export { StartFunc };