
document.addEventListener("DOMContentLoaded", function () {

    const requirementsBtn = document.getElementById("requirementsBtn");
    const requirementsInfo = document.getElementById("requirementsInfo");
    const closeRequirementsBtn = document.getElementById("closeRequirementsBtn");

    // Open the pop-up
    requirementsBtn.addEventListener("click", function () {
        requirementsInfo.showModal();
    });

    // Close the pop-up
    closeRequirementsBtn.addEventListener("click", function () {
        requirementsInfo.close();
    });

});
