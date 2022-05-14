function messageCad(identificacao, msg, removeClasse, addClasse){
    var mensagem = document.querySelector(identificacao);
    mensagem.classList.remove(removeClasse);
    mensagem.classList.add(addClasse);
    mensagem.textContent = msg ;
    return mensagem;
}