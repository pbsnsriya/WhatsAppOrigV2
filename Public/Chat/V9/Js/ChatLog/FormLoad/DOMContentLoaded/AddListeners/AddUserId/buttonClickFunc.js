const StartFunc = () => {
    // Test to see if the browser supports the HTML template element by checking
    // for the presence of the template element's content attribute.
    if ("content" in document.createElement("template")) {
        // Instantiate the table with the existing HTML tbody
        // and the row with the template
        const tbody = document.querySelector("#OpenUsersId");
        const template = document.querySelector("#TemplateForUserId");

        // Clone the new row and insert it into the table
        const clone = template.content.cloneNode(true);
        let td = clone.querySelectorAll("h3");
        td[0].textContent = "1235646565";

        tbody.appendChild(clone);
    } else {
        // Find another way to add the rows to the table because
        // the HTML template element is not supported.
    };
};

export { StartFunc };