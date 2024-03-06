document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const usernameInput = document.querySelector(".username input");
        const passwordInput = document.querySelector(".contraseña input");

        if (usernameInput.value.trim() === "" || passwordInput.value.trim() === "") {
            alert("Por favor complete todos los campos");
            return;
        }
        form.submit();
    });

    const recordarLink = document.querySelector(".recordar");

    recordarLink.addEventListener("click", function() {
        alert("¿Ha olvidado su contraseña?");
    });
});

var modal = document.getElementById("modal");

var forgotPasswordLink = document.querySelector(".recordar");

var closeButton = document.querySelector(".close");

forgotPasswordLink.addEventListener("click", function() {
    modal.style.display = "block";
});

closeButton.addEventListener("click", function() {
    modal.style.display = "none";
});

window.addEventListener("click", function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        modal.style.display = "none";
    }
});