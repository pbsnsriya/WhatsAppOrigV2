const CommonData = [
    {
        "title": "3rd",
        "start": "2025-05-17",
        "className": "bg-danger"
    },
    {
        "title": "1st",
        "start": "2025-05-18",
        "className": "bg-success"
    },
    {
        "title": "2nd",
        "start": "2025-05-19",
        "className": "bg-primary"
    }
];

let StartFunc = () => {
    localStorage.setItem("CalendarData", JSON.stringify(CommonData));
};

export { StartFunc };