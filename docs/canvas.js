
function desenhar_quadrado(ctx, x, y, largura, altura, corFundo, corBorda, espessura) {
    ctx.beginPath();
    ctx.lineWidth = espessura || 1;
    if (corFundo) {
        ctx.fillStyle = corFundo;
        ctx.fillRect(x, y, largura, altura);
    }
    if (corBorda) {
        ctx.strokeStyle = corBorda;
        ctx.strokeRect(x, y, largura, altura);
    }
    ctx.closePath();
}

function desenhar_linha(ctx, pontos, corFundo, corBorda, espessura) {
    ctx.beginPath();
    ctx.lineWidth = espessura || 1;
    ctx.moveTo(pontos[0][0], pontos[0][1]);
    for (let i = 1; i < pontos.length; i++) {
        ctx.lineTo(pontos[i][0], pontos[i][1]);
    }
    if (corFundo) {
        ctx.fillStyle = corFundo;
        ctx.fill();
    }
    if (corBorda) {
        ctx.strokeStyle = corBorda;
        ctx.stroke();
    }
    ctx.closePath();
}

// arcos
function desenhar_arco(ctx, x, y, raio, anguloInicial, anguloFinal, corFundo, corBorda, espessura) {
    ctx.beginPath();
    ctx.lineWidth = espessura || 1;
    ctx.arc(x, y, raio, anguloInicial, anguloFinal);
    if (corFundo) {
        ctx.fillStyle = corFundo;
        ctx.fill();
    }
    if (corBorda) {
        ctx.strokeStyle = corBorda;
        ctx.stroke();
    }
    ctx.closePath();
}

// texto
function escrever(ctx, texto, x, y, fonte, corFundo, corBorda, espessura) {
    ctx.beginPath();
    ctx.lineWidth = espessura || 1;
    ctx.font = fonte;
    ctx.textAlign = "center";
    if (corFundo) {
        ctx.fillStyle = corFundo;
        ctx.fillText(texto, x, y);
    }
    if (corBorda) {
        ctx.strokeStyle = corBorda;
        ctx.strokeText(texto, x, y);
    }
    ctx.closePath();
}


function desenhar_modelo1() {
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");

    desenhar_quadrado(ctx, 0, 0, 50, 50, "blue", null);
    desenhar_quadrado(ctx, 250, 0, 50, 50, "red", null);
    desenhar_quadrado(ctx, 0, 120, 30, 60, "cyan", null);
    desenhar_quadrado(ctx, 270, 135, 30, 30, "cyan", null);
    desenhar_quadrado(ctx, 110, 150, 40, 40, "red", null);

    
    desenhar_quadrado(ctx, 0, 240, 30, 30, "yellow", null);
    desenhar_quadrado(ctx, 0, 270, 60, 30, "yellow", null);

    desenhar_quadrado(ctx, 270, 240, 30, 30, "black", null);
    desenhar_quadrado(ctx, 240, 270, 60, 30, "black", null);

    desenhar_linha(ctx, [[50, 50], [150, 150]], null, "blue", 1);
    desenhar_linha(ctx, [[250, 50], [150, 150]], null, "red", 1);
    desenhar_linha(ctx, [[0, 150], [300, 150]], null, "green", 1);
    desenhar_linha(ctx, [[150, 150], [150, 300]], null, "black", 1);

    desenhar_arco(ctx, 150, 150, 80, Math.PI, 2 * Math.PI, null, "green", 1);
    desenhar_arco(ctx, 150, 150, 60, Math.PI, 2 * Math.PI, null, "green", 1);
    desenhar_arco(ctx, 150, 115, 15, 0, 2 * Math.PI, "cyan", "blue", 1);

    desenhar_arco(ctx, 150, 300, 80, Math.PI, 2 * Math.PI, null, "green", 1);
    desenhar_arco(ctx, 150, 300, 60, Math.PI, 2 * Math.PI, null, "green", 1);
    desenhar_arco(ctx, 150, 300, 40, Math.PI, 2 * Math.PI, "cyan", "green", 1);

    desenhar_arco(ctx, 70, 220, 15, 0, 2 * Math.PI, "yellow", "green", 1);
    desenhar_arco(ctx, 220, 220, 15, 0, 2 * Math.PI, "yellow", "green", 1);

    escrever(ctx, "Canvas", 150, 52, "22px Arial", "#333333", null);
}


function desenhar_modelo2() {
    let canvas = document.getElementById("canvas2");
    let ctx = canvas.getContext("2d");

    desenhar_quadrado(ctx, 0, 0, 300, 300, "#8ffcd4", null);

    desenhar_arco(ctx, 233, 75, 45, 0, 2 * Math.PI, "#fdfd40", null);

    desenhar_quadrado(ctx, 38, 225, 262, 75, "#808080", null);

    desenhar_arco(ctx, 0, 225, 38, 0, 2 * Math.PI, "#4a90f0", null);
    desenhar_quadrado(ctx, 0, 225, 38, 75, "#4a90f0", null);
    desenhar_quadrado(ctx, 38, 262, 92, 38, "#4a90f0", null);
    desenhar_arco(ctx, 130, 281, 19, 0, 2 * Math.PI, "#4a90f0", null);

    desenhar_quadrado(ctx, 38, 188, 14, 37, "#8b4a20", null);
    desenhar_quadrado(ctx, 263, 226, 14, 36, "#8b4a20", null);

    desenhar_quadrado(ctx, 113, 150, 75, 75, "#8b4a20", null);
    desenhar_quadrado(ctx, 120, 165, 22, 22, "#4aa8f0", null);
    desenhar_quadrado(ctx, 158, 165, 22, 22, "#4aa8f0", null);
    desenhar_quadrado(ctx, 142, 187, 16, 38, "#6b4423", null);

    desenhar_linha(ctx, [[108, 150], [150, 112], [193, 150]], "#f4694f", null);

    desenhar_arco(ctx, 45, 171, 23, 0, 2 * Math.PI, "#2e8b2e", null);
    desenhar_arco(ctx, 270, 208, 24, 0, 2 * Math.PI, "#2e8b2e", null);
}


desenhar_modelo1();
desenhar_modelo2();