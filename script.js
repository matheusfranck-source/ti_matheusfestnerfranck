document.querySelectorAll(".apoiar").forEach(function(botao) {
    let apoiado = false;

    botao.addEventListener("click", function() {
        let cartao = botao.parentElement;
        let display = cartao.querySelector(".contagem");
        let valor = Number(display.textContent);

        if (apoiado === false) {
            display.textContent = valor + 1;
            botao.textContent = "Apoiado";
        } else {
            display.textContent = valor - 1;
            botao.textContent = "Apoiar";
        }

        apoiado = !apoiado;
    });
});