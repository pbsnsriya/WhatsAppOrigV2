import { StartFunc as FetchDelete } from "./FetchDelete/entry.js";

const StartFunc = async (row, $element, field) => {
    if (row.field === "KS-Delete") {
        let jVarLocalFromSwal = await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "error",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "grey",
            confirmButtonText: "Yes, delete it!",
            reverseButtons: true,
            focusCancel: true,
            cancelButtonText: "Cancel"
        });

        if (jVarLocalFromSwal.isConfirmed) {
            if ("Key" in row.row) {
                await FetchDelete({ inRowKey: row.row.Key });
                Swal.fire({
                    title: "Deleted!",
                    text: `The record ${row.row.Key} has been deleted.`,
                    icon: "success",
                    confirmButtonColor: "#3085d6",
                    confirmButtonText: "OK"
                });
            }
        }
    }
};

export { StartFunc };
