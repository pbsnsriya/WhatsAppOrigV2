import { StartFunc as FetchDelete } from "./FetchDelete/entry.js";

const StartFunc = async (row, $element, field) => {
    if (field === "KS-WhatsApp") {

        if (jVarLocalFromSwal.isConfirmed) {
            if ("pk" in row) {
                await FetchDelete({ inRowPk: row.pk });
                Swal.fire({
                    title: "Deleted!",
                    text: `The record ${row.pk} has been deleted.`,
                    icon: "success",
                    confirmButtonColor: "#3085d6",
                    confirmButtonText: "OK"
                });
            }
        }
    }
};

export { StartFunc };
