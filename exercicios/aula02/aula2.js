// ex1
// Os pares que reprovam na régua de 4,5:1 são:
// - #888888 no #FFFFFF (contraste 3,5:1, abaixo de 4,5:1)
// - #CCCCCC no #FFFFFF (contraste 1,6:1, abaixo de 4,5:1)

// ex2
// (a) alt="Fila da cantina dobrando o corredor no intervalo"
// (b) alt="Logotipo da escola"
// (c) alt=""

// ex3
// Motivo: Altera apenas a cor de fundo, violando a regra "Cor nunca sozinha". Pessoas daltônicas ou que usam leitor de tela não saberão que a ação foi registrada.
// Correção:
botao.addEventListener("click", function() {
    botao.style.backgroundColor = "green";
    botao.textContent = "Apoiado";
});

// ex4
// 1. Incluída a frase explicativa "<p>Aponte um problema da escola e apoie os que mais te atrapalham.</p>" no cabeçalho.
// 2. Adicionada a regra CSS ".apoiar:focus { outline: 3px solid #C00000; outline-offset: 2px; }" para manter o foco visível na navegação por teclado.
// 3. Atualizado o JavaScript para alternar o texto do botão para "Apoiado" e atualizar a contagem visual de apoios.

// ex5
// 1ª Melhoria: Adicionar atributo alt nas imagens (Acessibilidade - Alto impacto / Baixo esforço).
// 2ª Melhoria: Ajustar o contraste de cores abaixo da régua de 4,5:1 (Acessibilidade - Alto impacto / Médio esforço).
// 3ª Melhoria: Ajustar o espaçamento e alinhamento visual dos cartões (UX - Baixo impacto / Baixo esforço).
// Justificativa: A ordem segue a matriz de priorização de resolver primeiro itens de alto impacto e baixo esforço, seguidos de alto impacto/alto esforço, deixando baixo impacto por último.
