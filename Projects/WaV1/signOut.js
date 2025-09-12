import { getClientInfo, startFunc as StartFuncFromClientInfo } from "../../CommonExpose/clientInfo.js";

const StartFunc = () => {
    let LocalClient = getClientInfo();

    console.log('client info :', Object.keys(LocalClient));

    //detener el cliente y eliminar el directorio de sesiones
    LocalClient.logout();

    StartFuncFromClientInfo({ inClient: null });
};

export { StartFunc };