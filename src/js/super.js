let textoAtual = 'texto'

let indice = 0;

function simularDigitacao() {
    // condição, se terminei de digitar tudo execute (indice < textoAtual.length)
    if (indice < textoAtual.length) {
        // não terminei e preciso continuar digitando
        let elemento = document.getElementById("titulo")
        elemento.textContent += textoAtual.charAt(indice)
        //pega o elemento + o conteudo do elemento e guarda as informações, adicionando o conteudo de textoAtual.charAt(indice)
        indice = indice + 1;
        setTimeout(simularDigitacao, 100);
    } else {
        indice = 0;
    }
}

function mudarTexto(novoTexto) {
    let elemento = document.getElementById("titulo")
    elemento.textContent = ""
    textoAtual = novoTexto

    setTimeout(simularDigitacao, 2000);
}
