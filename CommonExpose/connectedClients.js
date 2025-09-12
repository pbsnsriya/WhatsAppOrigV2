const clients = new Map();

const ReadFunc = () => {
    console.log("clients : ", clients.size);

    return clients;
};

export { ReadFunc };