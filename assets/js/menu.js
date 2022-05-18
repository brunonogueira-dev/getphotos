var btnMenu = document.querySelector("#menu-toggle");
var menuPrincipal = document.querySelector("#menu-principal");

var home = document.querySelector(".home");
var personalizacao = document.querySelector(".personalizacao");
var sFotos = document.querySelector(".sele-fotos");
var cliente = document.querySelector(".cliente");
var credito = document.querySelector(".credito");
var cartao = document.querySelector(".cartao");
var pacote = document.querySelector(".pacote");
var suporte = document.querySelector(".suporte");
var conta = document.querySelector(".conta");
var config = document.querySelector(".configuracao");
var sair = document.querySelector(".sair");

if(window.matchMedia("min-width:992px")){
    menuPrincipal.classList.add("ativo");
    nameMenu();
}

btnMenu.addEventListener("click", function (event) {
    menuPrincipal.classList.toggle("ativo");
    nameMenu();
});
function nameMenu(){
    if (home.textContent === "") {
        home.textContent = "Home";
        personalizacao.textContent = "Personalização";
        sFotos.textContent = "Seleção de Fotos";
        cliente.textContent = "Clientes";
        credito.textContent = "Ganhar Créditos";
        cartao.textContent = "Cartão Fidelidade";
        pacote.textContent = "Pacote e Valores";
        suporte.textContent = "Suporte";
        conta.textContent = "Conta";
        config.textContent = "Configurações";
        sair.textContent = "Sair";
    }else{
        home.textContent = "";
        personalizacao.textContent = "";
        sFotos.textContent = "";
        cliente.textContent = "";
        credito.textContent = "";
        cartao.textContent = "";
        pacote.textContent = "";
        suporte.textContent = "";
        conta.textContent = "";
        config.textContent = "";
        sair.textContent = "";
    }
}