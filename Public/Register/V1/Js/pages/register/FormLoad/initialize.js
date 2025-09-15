const StartFunc = () => {
    let jVarLocalMobileId = document.getElementById('MobileId');

    const phoneInput = window.intlTelInput(jVarLocalMobileId, {
        initialCountry: "in",
        utilsScript:
            "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
    });
};

export { StartFunc };
