// import { StartFunc as sendMessage } from "./sendMessage.js";

import { StartFunc as StartFuncFromwAProfile } from "../OnMessage/wAProfile.js";
import { StartFunc as StartFuncFromChangeName } from "../OnMessage/ChangeName.js";
import { StartFunc as StartFuncFromGetWebSocketId } from "../OnMessage/getWebSocketId.js";
import { StartFunc as StartFuncFromreturnOnlineClients } from "../OnMessage/returnOnlineClients.js";
import { StartFunc as StartFuncFromToFullChat } from "../OnMessage/fullChat.js";
import { StartFunc as StartFuncFromMyChat } from "../OnMessage/myChat.js";

let StartFunc = (event) => {
  try {
    let jVarLocalParsedData = JSON.parse(event.data);
    console.log("-------- : ", jVarLocalParsedData);
    switch (jVarLocalParsedData?.Type) {
      case "wAProfile":
        StartFuncFromwAProfile({ inData: jVarLocalParsedData.res });
        break;
      case "returnOnlineClients":
        StartFuncFromreturnOnlineClients({ inData: jVarLocalParsedData.res });
        break;
      case "ChangeName":
        StartFuncFromChangeName(
          jVarLocalParsedData.Message,
          jVarLocalParsedData.fromId
        );
        break;
      case "GetWebSocketId":
        StartFuncFromGetWebSocketId({
          inData: jVarLocalParsedData.webSocketId,
        });
        break;
      case "ToFullChat":
        StartFuncFromToFullChat({ inData: jVarLocalParsedData.res });
        break;
      case "myChat":
        StartFuncFromMyChat({ inData: jVarLocalParsedData.ChatLog });
        break;
      default:
        break;
    }
  } catch (error) {
    // jFLocalShowMessage({ inMessage: event.data });
  }
};

export { StartFunc };
