function login() {
    var user, password

    user = document.getElementsByName("email")[0].value
    password = document.getElementsByName("password")[0].value

    if (user == "prueba" && password == "1234") {
        alert("ya")
        window.location.href = "nuevo.html";
    } else {
        alert("none")
        window.location.href = "nuevo.html";
    }
}