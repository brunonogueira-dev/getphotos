var  btnMenu = document.querySelector("#menu-toggle");
var menuPrincipal = document.querySelector("#menu-principal");

btnMenu.addEventListener("click", function (){
    menuPrincipal.classList.toggle("ativo");
});