

var btnCad = document.querySelector("#btnCad");

btnCad.addEventListener("click", function validaUser(event){
    event.preventDefault();

    var formUser = document.querySelector("#formUserCad");
    var buscaUser = buscaUsuario(formUser);

    var validaForm = valida(buscaUser);

    //efetuar cadastro aqui
    if (validaForm){
        messageCad("#cad-alert", "Cadastrado com sucesso", "none-message", "active-message")
    }else{
        messageCad("#cad-alert", "Cadastrado com sucesso", "active-message", "none-message")
    }

});

function buscaUsuario(formUser){

    var usuario = {
        name : formUser.querySelector("#nome").value,
        email : formUser.querySelector("#email").value,
        password: formUser.querySelector("#senha").value,
        type: 0,
    }
    return usuario;

}
function valida(buscaUser){
    var statusUser = true;
    if(buscaUser.name === ""){
        messageCad("#name-alert", "Nome: Campo Obrigatório", "none-message", "active-message");
        statusUser = false;
    }else{
        messageCad("#name-alert", "", "active-message", "none-message");
    }

    if (buscaUser.email === ""){
        messageCad("#email-alert", "E-mail: Campo Obrigatório", "none-message", "active-message");
        statusUser = false;
    }else{
        messageCad("#email-alert", "", "active-message", "none-message");
    }

    if(buscaUser.password === ""){
        messageCad("#pass-alert", "Senha: Campo Obrigatório", "none-message", "active-message");
        statusUser = false;
    }else{
        messageCad("#pass-alert", "", "active-message", "none-message");
    }
   return statusUser;

}
function messageCad(identificacao, msg, removeClasse, addClasse){
    var mensagem = document.querySelector(identificacao);
    mensagem.classList.remove(removeClasse);
    mensagem.classList.add(addClasse);
    mensagem.textContent = msg ;
    return mensagem;
}