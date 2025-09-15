const StartFunc = ({ inTokenName }) => {
    const cookieValue = document.cookie
        .split("; ")
        .find((row) => row.startsWith(`${inTokenName}=`))
        ?.split("=")[1];

    console.log("cookieValue:", cookieValue);

    if (cookieValue !== undefined) {
        return true;
    };
    return false

};

export { StartFunc };
