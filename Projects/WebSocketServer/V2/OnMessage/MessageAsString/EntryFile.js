import { StartFunc as StartFuncreturnOnlineClients } from "./returnOnlineClients.js";
import { StartFunc as StartFuncGetWebSocketId } from "./getWebSocketId.js";
import { StartFunc as StartFuncreturnOnlineClientsWOMe } from "./returnOnlineClientsWOMe.js";
import { StartFunc as myChat } from "./myChat.js";
import { StartFunc as myPhone } from "./myPhone.js";
import { StartFunc as wAProfile } from "./wAProfile.js";
import { StartFunc as StartFuncFromGetQrCode } from "./getQrCode.js";
import { StartFunc as StartFuncStartWA } from "./startWA.js";
import { StartFunc as StartFuncAiChat } from "./AiChat/entryFile.js";
import { StartFunc as StartFuncStopWA } from "./stopWA.js";
import { StartFunc as StartFuncFromWAReadAllChats } from "./wAReadAllChats.js";
import { StartFunc as StartFuncFromReadFromSingleNumber } from "./ForWA/readFromSingleNumber.js";
import { StartFunc as StartFuncFromReturnWhoAmI } from "./returnWhoAmI.js";
import { StartFunc as StartFuncfromFullChat } from "./fullChat.js";
import { StartFunc as StartFuncFromChatIn } from "./chatIn.js";

let StartFunc = ({ inDataAsString, inws, inClients, inChatLog, inSendFunc }) => {
    let LocalDataAsSting = inDataAsString;
    // console.log("LocalDataAsSting : ", LocalDataAsSting);

    if (LocalDataAsSting === "returnWhoAmI") {
        StartFuncFromReturnWhoAmI({ inDataAsString: LocalDataAsSting, inws: inws, inClients, inSendFunc });
    };

    if (LocalDataAsSting === "returnOnlineClients") {
        StartFuncreturnOnlineClients({ inDataAsString: LocalDataAsSting, inClients, inSendFunc });
    };

    if (LocalDataAsSting === "GetWebSocketId") {
        StartFuncGetWebSocketId({ inDataAsString: LocalDataAsSting, inws, inClients, inSendFunc });
    };

    if (LocalDataAsSting === "returnOnlineClientsWOMe") {
        StartFuncreturnOnlineClientsWOMe({ inDataAsString: LocalDataAsSting, inws: inws, inClients: inClients });
    };

    if (LocalDataAsSting === "myChat") {
        myChat({ inChatLog, inws: inws, inClients: inClients });
    };

    if (LocalDataAsSting === "myPhone") {
        myPhone({ inSendFunc });
    };

    if (LocalDataAsSting === "WAProfile") {
        wAProfile({ inSendFunc, inws });
    };

    if (LocalDataAsSting === "GetQrCode") {
        StartFuncFromGetQrCode({ inSendFunc, inws });
    };

    if (LocalDataAsSting === "StartWA") {
        StartFuncStartWA().then();
    };

    if (LocalDataAsSting === "StopWA") {
        StartFuncStopWA({ inws });
    };

    if (LocalDataAsSting === "WAReadAllChats") {
        StartFuncFromWAReadAllChats({ inws });
    };

    if (LocalDataAsSting.startsWith('WAReadFrom')) {
        const LocalFromNumber = LocalDataAsSting.split('@')[1];

        StartFuncFromReadFromSingleNumber({ inws, inFromNumber: LocalFromNumber });
    };

    if (LocalDataAsSting === "fullChat") {
        StartFuncfromFullChat({ inDataAsString: LocalDataAsSting, inClients, inSendFunc });
    };

    if (LocalDataAsSting === "ChatIn") {
        StartFuncFromChatIn({ inDataAsString: LocalDataAsSting, inClients, inSendFunc });
    }

    StartFuncAiChat({ inDataAsString, inws, inClients, inChatLog, inSendFunc });
};

export { StartFunc };