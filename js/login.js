const loginForm = document.getElementById("login-form");
const message = document.getElementById("message");

loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email != "" && password != "") {
        window.location = 'page/dashboard.html';
    } else {
        message.innerHTML = "Credenciais inválidas. Tente novamente.";
    }

  });