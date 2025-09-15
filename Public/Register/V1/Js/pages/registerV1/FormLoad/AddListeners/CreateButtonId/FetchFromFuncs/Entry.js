import { StartFunc as StartFuncFetchFuncs } from "./PostFetch.js";
import { StartFunc as CheckFunc } from "./CheckFunc.js";
import { StartFunc as StartFuncAfterFetch } from "./AfterFetch/EntryFile.js";

let StartFunc = async () => {
    let jVarLocalFromCheck = CheckFunc();

    if (jVarLocalFromCheck) {
        let jVarLocalFromFetch = await StartFuncFetchFuncs();

        if (jVarLocalFromFetch.status === 200) {
            let jVarLocalFetchData = await jVarLocalFromFetch.json();
            StartFuncAfterFetch();
        };

        if (jVarLocalFromFetch.status === 500) {
            myFunction();
            // alert("You are already Registered...");
        };
    };
};

function myFunction() {
    var txt;
    if (confirm("Already Registered, Call")) {
        var url = "tel:+91-984-816-3021";
        var win = window.open(url, '_blank');  ///similar to above solution
        win.focus();
    };
    // document.getElementById("demo").innerHTML = txt;
};

export { StartFunc }