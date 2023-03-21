// Escreva um programa que exiba a tabuada de um número escolhido pelo usuário.

function tabuada() {
    let numero = parseInt(document.getElementById("numero").value)
    let index = 0
    let resultado = document.getElementById("resultado")
    resultado.innerHTML = ""

    while (index <= 10) {
        let multiplicacao = numero * index
        resultado.innerHTML += `${numero} x ${index} = ${multiplicacao} <br>`
        index++
    }
}

