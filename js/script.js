
document.addEventListener("DOMContentLoaded", function () {

    // REQUIREMENTS POP-UP
    const requirementsBtn = document.getElementById("requirementsBtn");
    const requirementsInfo = document.getElementById("requirementsInfo");

    if (requirementsBtn && requirementsInfo) {
        requirementsBtn.addEventListener("click", function () {
            requirementsInfo.showModal();
        });
    }


    // DONATION POP-UP
    const donateBtn = document.getElementById("donateBtn");
    const donateDialog = document.getElementById("donateDialog");
    const donationForm = document.getElementById("donationForm");

    if (donateBtn && donateDialog) {
        donateBtn.addEventListener("click", function (event) {
            event.preventDefault();
            donateDialog.showModal();
        });
    }

    if (donationForm && donateDialog) {
        donationForm.addEventListener("submit", function (event) {
            event.preventDefault();

            alert("Thank you for supporting NewSeas!");

            donationForm.reset();
            donateDialog.close();
        });
    }


    // SIGN UP POP-UP
    const signupBtn = document.getElementById("signupBtn");
    const signupDialog = document.getElementById("signupDialog");
    const registrationForm = document.getElementById("registrationForm");

    if (signupBtn && signupDialog) {
        signupBtn.addEventListener("click", function () {
            signupDialog.showModal();
        });
    }

    if (registrationForm && signupDialog) {
        registrationForm.addEventListener("submit", function (event) {
            event.preventDefault();

            alert("Thank you for your interest in NewSeas!");

            registrationForm.reset();
            signupDialog.close();
        });
    }

});
