const StartFunc = ({ inData }) => {
    
    let totalCredit = 0;
    let totalDebit = 0;

    inData.forEach(row => {
        totalCredit += parseFloat(row.Credit) || 0;
        totalDebit += parseFloat(row.Debit) || 0;
    });

    const creditTotalEl = document.getElementById("HtmlTotalId-Credit");
    const debitTotalEl = document.getElementById("HtmlTotalId-Debit");

    if (creditTotalEl) creditTotalEl.innerText = `₹${totalCredit.toFixed(2)}`;
    if (debitTotalEl) debitTotalEl.innerText = `₹${totalDebit.toFixed(2)}`;

    const creditDiffEl = document.getElementById("HtmlDiffId-Credit");
    const debitDiffEl = document.getElementById("HtmlDiffId-Debit");

    if (creditDiffEl) creditDiffEl.innerText = `₹${(totalCredit - totalDebit).toFixed(2)}`;
    if (debitDiffEl) debitDiffEl.innerText = `₹${(totalDebit - totalCredit).toFixed(2)}`;
};

export { StartFunc };
