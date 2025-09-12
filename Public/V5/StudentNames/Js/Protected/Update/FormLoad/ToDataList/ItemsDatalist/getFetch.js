let StartFunc = async () => {
    let jVarLocalFetchUrl = `/Masters/MastersAddOns/ShowAll`;
    let response = await fetch(jVarLocalFetchUrl);

    return await response;
};

export { StartFunc };

