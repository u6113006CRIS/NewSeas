
document.addEventListener("DOMContentLoaded", function () {

    const requirementsBtn = document.getElementById("requirementsBtn");
    const requirementsInfo = document.getElementById("requirementsInfo");

    // Open the pop-up
    requirementsBtn.addEventListener("click", function () {
        requirementsInfo.showModal();
    });
});
// SIGN UP REGISTRATION POP-UP

const signupBtn = document.getElementById("signupBtn");
const signupDialog = document.getElementById("signupDialog");
const registrationForm = document.getElementById("registrationForm");

signupBtn.addEventListener("click", function () {
    signupDialog.showModal();
});

registrationForm.addEventListener("submit", function (event) {
    event.preventDefault();

    alert("Thank you for your interest in NewSeas!");

    registrationForm.reset();
    signupDialog.close();
});
