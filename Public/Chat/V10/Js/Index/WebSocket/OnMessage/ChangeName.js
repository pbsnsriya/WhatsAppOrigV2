let StartFunc = (inValue , fromId) => {
  // console.log("inValue : ", inValue);
  let fromdomwebsocketId = document.getElementById("UserNameId").dataset.webSocketId;
  if (fromdomwebsocketId === fromId) {
    jFLocalToInputUserNameId(inValue);
  } 
  
}; 

let jFLocalToInputUserNameId = (inValue) => {
  let jVarLocalHtmlId = "UserNameId";
  let jVarLocalUserNameId = document.getElementById(jVarLocalHtmlId);

  if ((jVarLocalUserNameId === null) === false) {
    jVarLocalUserNameId.innerHTML = inValue;
  }
};

export { StartFunc };
