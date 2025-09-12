let StartFunc = ({ inResponseAsJson }) => {
    inResponseAsJson.forEach(element => {
        if (element.Credit > 0) {
            LocalFuncForCredit({
                title: element.AccountName,
                fullValue: element.Credit,
                shortValue: element.Credit,
                date: element.Date,
                trend: element.Description
            });
        } else {
            LocalFuncForDebit({
                title: element.AccountName,
                fullValue: element.Debit,
                shortValue: element.Debit,
                date: element.Date,
                trend: element.Description
            });
        };
    });
};

function createCardFromTemplate(templateId, data) {
    const template = document.getElementById(templateId);
    const clone = template.content.cloneNode(true);

    // Set values
    clone.querySelectorAll('[data-title]').forEach(el => el.textContent = data.title);
    if (data.fullValue) clone.querySelector('[data-full-value]').textContent = data.fullValue;
    if (data.shortValue) clone.querySelector('[data-short-value]').textContent = data.shortValue;
    if (data.date) clone.querySelector('[data-date]').textContent = data.date;
    if (data.location) clone.querySelector('[data-location]').textContent = data.location;
    if (data.trend) clone.querySelector('[data-trend]').textContent = data.trend;

    document.getElementById('card-container').appendChild(clone);
};

let LocalFuncForCredit = (data) => {
    const template = document.getElementById("Credit-card-template");
    const clone = template.content.cloneNode(true);

    // Set values
    clone.querySelectorAll('[data-title]').forEach(el => el.textContent = data.title);
    if (data.fullValue) clone.querySelector('[data-full-value]').textContent = data.fullValue;
    if (data.shortValue) clone.querySelector('[data-short-value]').textContent = data.shortValue;
    if (data.date) clone.querySelector('[data-date]').textContent = data.date;
    if (data.trend) clone.querySelector('[data-trend]').textContent = data.trend;

    document.getElementById('card-container').appendChild(clone);
};

let LocalFuncForDebit = (data) => {
    const template = document.getElementById("Debit-card-template");
    const clone = template.content.cloneNode(true);

    // Set values
    clone.querySelectorAll('[data-title]').forEach(el => el.textContent = data.title);
    if (data.fullValue) clone.querySelector('[data-full-value]').textContent = data.fullValue;
    if (data.shortValue) clone.querySelector('[data-short-value]').textContent = data.shortValue;
    if (data.date) clone.querySelector('[data-date]').textContent = data.date;
    if (data.trend) clone.querySelector('[data-trend]').textContent = data.trend;

    document.getElementById('card-container').appendChild(clone);
};

export { StartFunc };