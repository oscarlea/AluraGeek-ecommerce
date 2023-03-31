const loginForm = document.querySelector(".login__form");
const loginButton = document.getElementById("login-form-submit");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "usuario" && password === "1234") {
        window.location.href = "productos.html"; 
    } 
})