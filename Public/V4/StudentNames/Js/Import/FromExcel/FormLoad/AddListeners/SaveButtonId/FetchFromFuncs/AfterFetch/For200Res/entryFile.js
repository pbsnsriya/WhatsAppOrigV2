import UrlJson from './url.json' with {type: 'json'};

let StartFunc = ({ inRowPk }) => {
    let LocalRowPk = inRowPk;

    if (LocalRowPk === undefined) {
        window.location.href = "";

        return;
    };

};




export { StartFunc }