const StartFunc = ({ inFindColumn, inData }) => {
    const fieldName = inFindColumn.field;

    const total = inData
        .map(row => +row[fieldName] || 0)
        .reduce((sum, value) => sum + value, 0);

    const totalElement = document.getElementById(`HtmlTotalId-${fieldName}`);
    if (totalElement) {
        totalElement.innerText = `₹ ${total}`;
    }
};

export { StartFunc };
