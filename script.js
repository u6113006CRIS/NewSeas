
document.addEventListener("DOMContentLoaded", function () {

    const requirementsBtn = document.getElementById("requirementsBtn");
    const requirementsInfo = document.getElementById("requirementsInfo");

    // Open the pop-up
    requirementsBtn.addEventListener("click", function () {
        requirementsInfo.showModal();
    });
});
