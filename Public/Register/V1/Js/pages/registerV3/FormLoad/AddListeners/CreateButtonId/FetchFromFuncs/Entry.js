import { StartFunc as StartFuncFetchFuncs } from "./PostFetch.js";
import { StartFunc as CheckFunc } from "./CheckFunc.js";
import { StartFunc as StartFuncAfterFetch } from "./AfterFetch/EntryFile.js";

let StartFunc = async () => {
    let jVarLocalFromCheck = CheckFunc();
    // jVarLocalFromCheck = false;

    if (jVarLocalFromCheck === false) {
        let jVarLocalFormId = document.getElementById('FormId');

        let jVarLocalFirstInValid = jVarLocalFormId.querySelector(".is-invalid");
        jVarLocalFirstInValid.focus();
        console.log("jVarLocalFirstInValid : ", jVarLocalFirstInValid);

        return false;
    };

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

function myFunction() {
    if (confirm("Already Registered, Call")) {
        var url = "tel:+91-984-816-3021";
        var win = window.open(url, '_blank');  ///similar to above solution
        win.focus();
    };
    // document.getElementById("demo").innerHTML = txt;
};

export { StartFunc }