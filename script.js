// Seleciona todos os cartões do Radar
let cartoes = document.querySelectorAll('.cartao');

cartoes.forEach(function(cartao) {
    let apoiado = false; // Controle individual por cartão
    let botaoApoiar = cartao.querySelector('.apoiar');
    let botaoRemover = cartao.querySelector('.remover');
    let display = cartao.querySelector('.contagem');

    // Alterna o estado do botão Apoiar/Apoiado e atualiza a contagem
    botaoApoiar.addEventListener('click', function() {
        let valor = Number(display.textContent);
        if (!apoiado) {
            valor++;
            display.textContent = valor;
            botaoApoiar.textContent = "Apoiado";
            apoiado = true;
        } else {
            if (valor > 0) valor--;
            display.textContent = valor;
            botaoApoiar.textContent = "Apoiar";
            apoiado = false;
        }
    });

    // Remove o apoio garantindo que a contagem não fique negativa
    botaoRemover.addEventListener('click', function() {
        let valor = Number(display.textContent);
        if (valor > 0) {
            valor--;
            display.textContent = valor;
            if (apoiado && valor === 0) {
                botaoApoiar.textContent = "Apoiar";
                apoiado = false;
            }
        }
    });
});