const jVarCommonDataListId="AddOnsDataListId";

const StartFunc = (data) => {
    data.forEach(element => {
        jFLocalAddToItems({ inAddOnService: element.AddOnService });
    });
};

const jFLocalAddToItems = ({ inAddOnService }) => {
    const option = `<option value="${inAddOnService}">${inAddOnService}</option>`
    // var option = $('<option value="' + inItemName + '"></option>');
    $(`#${jVarCommonDataListId}`).append(option);
};

export { StartFunc };