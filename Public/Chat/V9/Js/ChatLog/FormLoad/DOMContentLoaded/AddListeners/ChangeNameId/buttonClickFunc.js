const StartFunc = async () => {
    const { value: userInput } = await Swal.fire({
        title: "Enter Account Name",
        input: "text",
        inputLabel: "Account Name",
        showCancelButton: true,
        inputValidator: (value) => {
            if (!value) {
                return "Anonymous"; 
            }
        }
    });

    if (userInput && userInput.trim() !== "") {
        webSocket.send(JSON.stringify({ Type: "ChangeName", Message: userInput.trim() }));
    }
};

export { StartFunc };