function login() {
    var user, password

    user = document.getElementsByName("email")[0].value
    password = document.getElementsByName("password")[0].value

    if (user == "prueba" && password == "1234") {
        alert("ya")
        window.location.href = "producto-nuevo.html";
    } else {
        alert("none")
        /* window.location.href = "../producto-nuevo.html"; */
        /* window.location.href = "http://127.0.0.1:5500/producto-nuevo.html"; */
        location.href='http://127.0.0.1:5500/producto-nuevo.html'
        
    }
}