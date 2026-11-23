
document.addEventListener("DOMContentLoaded", function () {

    console.log("NewSeas website is working!");

    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(function (button) {

        button.addEventListener("click", function () {

            console.log("Button clicked!");

        });

    });

});
