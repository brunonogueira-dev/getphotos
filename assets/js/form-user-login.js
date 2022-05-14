var btnLogin = document.querySelector("#btnLogin");
btnLogin.addEventListener("click", function (event){
    event.preventDefault();
    var formLogin = document.querySelector("#formLogin");

    var usuario = buscaLogin(formLogin);

    console.log(usuario);
    //formLogin.reset();
});

function buscaLogin(formUserLogin){
    var usuario = {
        email: formUserLogin.querySelector("#email").value,
        senha: formUserLogin.querySelector("#senha").value
    }
    return usuario;
}