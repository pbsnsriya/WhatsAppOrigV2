const StartFunc = ({ inResponse }) => {
    if (inResponse.status === 200) {
        window.location.href = ""
    };
};

export { StartFunc };