let StartFunc = ({ inResponse }) => {
   jFLocalToInputValue({ inValue: inResponse });
   const keyFromUrl = getUrlQueryParams({ inGetKey: "Key" });
   jFLocalToInputKey({ inKey: keyFromUrl });
};

let jFLocalToInputValue = ({ inValue }) => {
   let inputEl = document.getElementById("valueInput");

   if (inputEl !== null) {
      inputEl.value = inValue;
   }
};

let jFLocalToInputKey = ({ inKey }) => {
   let keyInputEl = document.getElementById("keyInput");

   if (keyInputEl !== null) {
      keyInputEl.value = inKey;
   }
};

let getUrlQueryParams = ({ inGetKey }) => {
   const queryString = window.location.search;
   const parameters = new URLSearchParams(queryString);
   const value = parameters.get(inGetKey);
   return value;
};

export { StartFunc };
