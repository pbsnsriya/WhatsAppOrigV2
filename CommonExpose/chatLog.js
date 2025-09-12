const CommonChatLog = [];

const ReadFunc = () => {
    return CommonChatLog;
};

const ReturnCopyFunc = () => {
    return [...CommonChatLog];
};

const RetrunInChatOnly = () => {
    let LocalReturnChatIN = [...CommonChatLog];

    let LocalReturnChatINOnly = LocalReturnChatIN.filter(element => {
        return element.InOut === "In";
    });

    return LocalReturnChatINOnly;
};

const InsertFunc = (inObjectToInsert) => {
    CommonChatLog.push(inObjectToInsert);

    return true;
};

export { ReadFunc, InsertFunc, ReturnCopyFunc, RetrunInChatOnly };