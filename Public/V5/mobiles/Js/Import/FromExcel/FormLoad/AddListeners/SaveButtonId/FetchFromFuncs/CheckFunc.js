let StartFunc = () => {
    const checkedRows = $('#table').bootstrapTable('getSelections');
   
    if (checkedRows.length === 0) {
        return false
    };

    return true;
};

export { StartFunc };