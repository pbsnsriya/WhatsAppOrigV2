import KeysJson from './Keys.json' with {type: 'json'};

let StartFunc = () => {
    const checkedRows = $('#table').bootstrapTable('getSelections');

    KeysJson.body = JSON.stringify(checkedRows);

    return KeysJson;
};


export { StartFunc }