var btnMenu = document.querySelector(".menu-toggle");
var menuPrincipal = document.querySelector("#menu-principal");

var body = document.querySelector("body");
var resolucao = body.clientWidth;

var gCookie = getCookie('menu');

if (gCookie === null || gCookie === "ativo") {
    if (resolucao >= 992 && gCookie === null) {
        newCookie('menu', 'ativo');
        gCookie = getCookie('menu');
        menuPrincipal.classList.add('ativo');
        nameMenu('ativo');
    } else if (resolucao <= 991 && gCookie === null) {
        newCookie('menu', 'inativo');
        menuPrincipal.classList.remove("ativo");
    } else {
        gCookie = getCookie('menu');
        if (gCookie === "ativo") {
            menuPrincipal.classList.add('ativo');
            nameMenu('ativo');
        }else{
            menuPrincipal.classList.remove('ativo');
        }
    }
}

btnMenu.addEventListener("click", menuToggle);

function menuToggle(){
    var gStatus = getCookie('menu');
    if (gStatus !== "ativo") {
        newCookie('menu', 'ativo');
        gStatus = getCookie('menu');
        menuPrincipal.classList.add("ativo");
        nameMenu("ativo");
    } else {
        newCookie('menu', 'inativo');
        gStatus = getCookie('menu');
        menuPrincipal.classList.remove("ativo");
        nameMenu(null);
    }
}
function nameMenu(status) {
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
    var minimizar = document.querySelector('.minimizar-menu')

    if (status == "ativo") {
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
        minimizar.textContent = "Recolher Menu"
        var fade = document.querySelector(".texto-menu");
        fadeIn(".home", 1.5);
        fadeIn(".personalizacao", 1.5);
        fadeIn(".sele-fotos", 1.5);
        fadeIn(".cliente", 1.5);
        fadeIn(".credito", 1.5);
        fadeIn(".cartao", 1.5);
        fadeIn(".pacote", 1.5);
        fadeIn(".suporte", 1.5);
        fadeIn(".conta", 1.5);
        fadeIn(".configuracao", 1.5);
        fadeIn(".sair", 1.5);
        fadeIn(".minimizar-menu", 1.5);
    } else {
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
        minimizar.textContent = "";
        fadeOut(".home", 1);
        fadeOut(".personalizacao", 1);
        fadeOut(".sele-fotos", 1);
        fadeOut(".cliente", 1);
        fadeOut(".credito", 1);
        fadeOut(".cartao", 1);
        fadeOut(".pacote", 1);
        fadeOut(".suporte", 1);
        fadeOut(".conta", 1);
        fadeOut(".configuracao", 1);
        fadeOut(".sair", 1);
        fadeOut(".minimizar-menu", 1);
    }
}
