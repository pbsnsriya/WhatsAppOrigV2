let StartFunc = () => {
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your record has been saved",
        showConfirmButton: false,
        timer: 1500
    });
    let jVarLocalRefreshBSTableId = document.querySelector(`.RefreshBSTableClass`);
    jVarLocalRefreshBSTableId.click();
};

export { StartFunc };