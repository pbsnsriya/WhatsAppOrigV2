let StartFunc = ({ inResponseAsJson }) => {
    const jVarLocalCreditArray = inResponseAsJson.map(element => {
        return element.Credit;
    });

    const jVarLocalPkArray = inResponseAsJson.map(element => {
        return element.pk;
    });

    if (d.querySelector('.ct-chart-sales-value')) {
        //Chart 5
        new Chartist.Line('.ct-chart-sales-value', {
            labels: jVarLocalPkArray,
            series: [
                jVarLocalCreditArray
            ]
        }, {
            low: 0,
            showArea: true,
            fullWidth: true,
            plugins: [
                Chartist.plugins.tooltip()
            ],
            axisX: {
                // On the x-axis start means top and end means bottom
                position: 'end',
                showGrid: true
            },
            axisY: {
                // On the y-axis start means left and end means right
                showGrid: false,
                showLabel: false,
                labelInterpolationFnc: function (value) {
                    return '$' + (value / 1) + 'k';
                }
            }
        });
    }
};

let StartFunc1 = ({ inResponseAsJson }) => {
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

//   if (d.querySelector('.ct-chart-sales-value')) {
//             //Chart 5
//             new Chartist.Line('.ct-chart-sales-value', {
//                 labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
//                 series: [
//                     [0, 10, 30, 40, 80, 60, 100]
//                 ]
//             }, {
//                 low: 0,
//                 showArea: true,
//                 fullWidth: true,
//                 plugins: [
//                     Chartist.plugins.tooltip()
//                 ],
//                 axisX: {
//                     // On the x-axis start means top and end means bottom
//                     position: 'end',
//                     showGrid: true
//                 },
//                 axisY: {
//                     // On the y-axis start means left and end means right
//                     showGrid: false,
//                     showLabel: false,
//                     labelInterpolationFnc: function (value) {
//                         return '$' + (value / 1) + 'k';
//                     }
//                 }
//             });
//         }


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