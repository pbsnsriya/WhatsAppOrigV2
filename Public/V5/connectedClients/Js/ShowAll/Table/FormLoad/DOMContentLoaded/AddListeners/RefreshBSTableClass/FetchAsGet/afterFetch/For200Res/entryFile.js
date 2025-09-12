const tbody = document.getElementById("table-body");
const template = document.getElementById("row-template");

let StartFunc = ({ inResponseAsJson }) => {
    inResponseAsJson.forEach(element => {
        // Clone template content
        const clone = template.content.cloneNode(true);

        // Fill in page URL
        clone.querySelector("th").textContent = element.AccountName;

        // Fill page views
        clone.querySelectorAll("td")[0].textContent = element.Date;

        // Fill page value
        clone.querySelectorAll("td")[1].textContent = element.Description;

        // Fill bounce rate and icon
        const svg = clone.querySelector("svg");
        const path = svg.querySelector("path");
        const span = clone.querySelector("span");
        span.textContent = element.Credit || element.Debit;

        if (element.Credit > 0) {
            // Green up arrow
            svg.classList.add("text-success");
            path.setAttribute("d", "M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z");
        } else {
            // Red down arrow
            svg.classList.add("text-danger");
            path.setAttribute("d", "M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z");
        }

        // Append row to tbody
        tbody.appendChild(clone);
    });

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