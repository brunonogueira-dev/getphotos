var btnLogin = document.querySelector("#btnLogin");
btnLogin.addEventListener("click", function (event) {
    event.preventDefault();
    var formLogin = document.querySelector("#formLogin");
    var usuario = buscaLogin(formLogin);
    var validaLogin = validaUserLogin(usuario);

    if(validaLogin){
        messageCad("#loginSucess", "Logado com sucesso", "none-message", "active-message");
    }else{
        messageCad("#loginSucess", "Erro ao logar", "none-message", "active-message");
    }

    console.log(usuario);
    //formLogin.reset();
});

function buscaLogin(formUserLogin) {
    var usuario = {
        email: formUserLogin.querySelector("#email").value,
        senha: formUserLogin.querySelector("#senha").value
    }
    return usuario;
}

function validaUserLogin(usuario) {
    var statusLogin = true;
    if (usuario.email === "") {
        messageCad("#email-alert", "E-mail: Campo Obrigatório", "none-message", "active-message")
        statusLogin = false;
    } else {
        messageCad("#email-alert", "", "active-message", "none-message")
    }

    if (usuario.senha === "") {
        messageCad("#pass-alert", "Senha: Campo Obrigatório", "none-message", "active-message");
        statusLogin = false;
    } else {
        messageCad("#pass-alert", "", "active-message", "none-message");
    }
    return statusLogin;
}