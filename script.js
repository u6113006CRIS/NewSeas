
document.addEventListener("DOMContentLoaded", function () {

    const requirementsBtn = document.getElementById("requirementsBtn");
    const requirementsInfo = document.getElementById("requirementsInfo");

    requirementsBtn.addEventListener("click", function () {
        requirementsInfo.hidden = !requirementsInfo.hidden;

        requirementsBtn.textContent = requirementsInfo.hidden
            ? "See requirements"
            : "Hide requirements";
    });

});
