function messageCad(identificacao, msg, removeClasse, addClasse) {
    var mensagem = document.querySelector(identificacao);
    mensagem.classList.remove(removeClasse);
    mensagem.classList.add(addClasse);
    mensagem.textContent = msg;
    return mensagem;
}

function newCookie(name, valor) {
    var data = new Date(2199, 2, 1);
    data = data.toString();
    valor = encodeURI(valor);
    document.cookie = name + '=' + valor + '; expires=' + data + '; path=/';
    return true;
}

function getCookie(name) {
    var cookies = document.cookie;
    var prefix = name + "=";
    var begin = cookies.indexOf("; " + prefix);

    if (begin == -1) {
        begin = cookies.indexOf(prefix);
        if (begin != 0) {
            return null;
        }
    } else {
        begin += 2;
    }
    var end = cookies.indexOf(";", begin);
    if (end == -1) {
        end = cookies.length;
    }
    return unescape(cookies.substring(begin + prefix.length, end));
}

function deleteCookie(name) {
    data = new Date(2005, 2, 1);
    document.cookie = name + '=; expires=' + data + '; path=/';
}

function deletaTodosCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}
deletaTodosCookies();