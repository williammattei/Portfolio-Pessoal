let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

const RAIO = 25;
const COR_BOLA = "blue";

let mouseX = canvas.width / 2;
let mouseY = canvas.height / 2;


function limitar(valor, minimo, maximo) {
    return Math.min(Math.max(valor, minimo), maximo);
}

function atualizar_mouse(evento) {
    let retangulo = canvas.getBoundingClientRect();

    mouseX = (evento.clientX - retangulo.left - canvas.clientLeft) * (canvas.width / canvas.clientWidth);
    mouseY = (evento.clientY - retangulo.top - canvas.clientTop) * (canvas.height / canvas.clientHeight);
}

function desenhar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let x = limitar(mouseX, RAIO, canvas.width - RAIO);
    let y = limitar(mouseY, RAIO, canvas.height - RAIO);

    ctx.beginPath();
    ctx.fillStyle = COR_BOLA;
    ctx.arc(x, y, RAIO, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();

    requestAnimationFrame(desenhar);
}

document.addEventListener("mousemove", atualizar_mouse);

desenhar();