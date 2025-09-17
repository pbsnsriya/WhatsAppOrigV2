let StartFunc = () => {
    const formElement = document.getElementById("FormId");
    const formData = new FormData(formElement);

    const value = formData.get("Value")?.trim();

    const fetchConfig = {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ Value: value })
    };

    return fetchConfig;
};

export { StartFunc };
