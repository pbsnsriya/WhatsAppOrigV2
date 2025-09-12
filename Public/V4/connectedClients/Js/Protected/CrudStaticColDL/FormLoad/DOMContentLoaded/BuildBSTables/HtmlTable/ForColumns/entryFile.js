let StartFunc = ({ inColumns }) => {
    let LocalColumns = JSON.parse(JSON.stringify(inColumns));

    LocalColumns.splice(0, 0, jFLocalFuncForSerialColumn());
    LocalColumns.push(jFLocalFuncForOptionsColumn());
    // debugger;
    LocalColumns.forEach(element => {
        if (element.field !== "Opts" && element.field !== "KS-Serial") {
            element.footerFormatter = (data) => {
                return jFLocalFooterFormatterFunc({
                    inData: data,
                    inColumnInfo: element
                });
            };
        }
    });


    return LocalColumns;
};

const jFLocalOptsFormaterRun = (value, row, index) => {
    return `<button class="btn btn-sm btn-success save-btn" id="TableFooterSaveButtonId" data-index="${index}">Save</button>`;
};

const jFLocalFuncForOptionsColumn = () => {
    return {
        field: "Opts",
        title: "Opts ",
        footerFormatter: jFLocalOptsFormaterRun
    };
};

let jVarLocalFormatterFunc = (value, row, index) => {
    return index + 1;
};
const jFLocalFuncForSerialColumn = () => {

    return {
        "field": "KS-Serial",
        "title": "#",
        "formatter": jVarLocalFormatterFunc
    };
};

const jFLocalFooterFormatterFunc = ({ inData, inColumnInfo }) => {
    console.log("data : ", inData, inColumnInfo);

    return `<input class="form-control" name="${inColumnInfo.field}" type="text">`;
};

export { StartFunc };