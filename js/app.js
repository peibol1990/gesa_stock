const form = document.querySelector("#form-login");
const message = document.querySelector("#message");
const usuario = document.querySelector("#usuario");

usuario.addEventListener("click", function() {
    message.style.display = "none";
});

form.addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.querySelector("#usuario").value;
    const password = document.querySelector("#contraseña").value;

    if (username === "admin" && password === "password") {

        window.location.href = './paginas/menu.html';

    } else {
        message.textContent = "Login failed. Incorrect username or password";
        message.style.display = "inline-block";
    }
});