const clients = new Map();
const CommonTimeSpan = process.env.TimeSpan;

const ReadFunc = () => {
    // console.log("sent messages : ", clients.size);

    return clients;
};

const InsertFunc = ({ inValueToInsert }) => {
    clients.set(new Date(), inValueToInsert);
};

const CheckLastEntry = () => {
    const LocalDateDifference = DateDifference();
    // console.log("aaaaaaaaaaa : ",CommonTimeSpan, LocalDateDifference);

    if (LocalDateDifference > CommonTimeSpan) {
        return true;
    };

    return false;
};

const DateDifference = () => {
    const LocalClients = clients;
    const LocalSize = LocalClients.size

    if (LocalSize === 0) {
        return 10000;
    };

    const date1 = new Date();
    const date2 = new Date([...LocalClients].at(-1)[0]);

    // Calculate the difference in milliseconds
    const differenceInMs = (date1 - date2) / 1000;
    // console.log("differenceInMs : ", differenceInMs);

    return differenceInMs;
};

const InsertWithOutCheckFunc = ({ inValueToInsert }) => {
    clients.set(new Date(), inValueToInsert);
};

export { ReadFunc, InsertFunc, CheckLastEntry };