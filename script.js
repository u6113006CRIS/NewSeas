
document.addEventListener("DOMContentLoaded", function () {

    // REQUIREMENTS POP-UP
    const requirementsBtn = document.getElementById("requirementsBtn");
    const requirementsInfo = document.getElementById("requirementsInfo");

    requirementsBtn.addEventListener("click", function () {
        requirementsInfo.showModal();
    });
    // DONATION POP-UP

    const donateBtn = document.getElementById("donateBtn");
    const donateDialog = document.getElementById("donateDialog");
    const donationForm = document.getElementById("donationForm");

donateBtn.addEventListener("click", function (event) {
    event.preventDefault();
    donateDialog.showModal();
});
    });

    donationForm.addEventListener("submit", function (event) {
        event.preventDefault();

        alert("Thank you for supporting NewSeas!");

        donationForm.reset();
        donateDialog.close();
    });
    // SIGN UP POP-UP
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

});
