
let numeroAleatorio = Math.floor(Math.random() * 100);

function verificar() {
    let campoNumero = document.getElementById("numero");
    let numeroUsuario = Number(campoNumero.value);
    let resultado = document.getElementById("resultado");

    if (campoNumero.value === "" || numeroUsuario < 0 || numeroUsuario > 99) {
        resultado.innerHTML = "Digite um número válido!";
    }
    else if (numeroUsuario === numeroAleatorio) {
        resultado.innerHTML = "Parabéns! Você acertou!";
    }
    else if (numeroUsuario > numeroAleatorio) {
        resultado.innerHTML = "O número é menor!";
    }
    else {
        resultado.innerHTML = "O número é maior!";
    }
}

document.getElementById("botao").addEventListener("click", verificar);
