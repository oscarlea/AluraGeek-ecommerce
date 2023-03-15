function login() {
    var user, ássword

    user = document.getElementsByName("email")[0].value
    password = document.getElementsByName("password")[0].value

    if (user == "prueba" && password == "1234") {
        alert("ya")
    } else {
        alert("none")
    }
}