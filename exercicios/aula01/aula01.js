// Aula 01 - Um botao que lembra
// Responda abaixo. Mantenha os marcadores e nao apague os enunciados.

// ex1
let visto= false


// ex2
// Diga o que cada comparacao devolve, true ou false:
//   5 === 5 R= True
//   "5" === 5 R= False
//   "5" == 5 R= True
//   true === false R= False


// ex3
// O trecho abaixo roda sem dar erro, mas apoiar um cartao bagunca os outros.
// Diga por que, e escreva a correcao.
//
//   let apoiado = false;
//
//   document.querySelectorAll(".apoiar").forEach(function(botao) {
//     botao.addEventListener("click", function() {
//       // ...
//     });
//   });
// Por que ocorre
// A declaração fora do .forEach() faz com que todos os event listeners compartilhem a mesma variável apoiado, em vez de cada cartão ter seu próprio controle de estado.
//Corecao 
document.querySelectorAll(".apoiar").forEach(function(botao) {
  let apoiado = false; 

  botao.addEventListener("click", function() {
    apoiado = !apoiado;
  });
});


// ex4
// Complete o if/else para o botao voltar a dizer Apoiar quando o apoio for retirado.
//
//   if (apoiado === false) {
//     botao.textContent = "Apoiado";
//   } else {
//     botao.textContent = _____________;
//   }
if (apoiado === false) {
    botao.textContent = "Apoiado";
} else {
    botao.textContent = "Apoiar";
}

// ex5
// Este exercicio eh feito no index.html, nao aqui.
// Acrescente ao Radar um quarto cartao, com um problema real da sua escola,
// e faca o botao dele funcionar igual aos outros.
// Escreva aqui, em uma linha, o que voce mudou na pagina.
<div class="cartao">
        <h2>Quadra</h2>
        <p>Ela e lisa demais.</p>
        <p>Apoios: <span class="contagem">0</span></p>
        <button class="apoiar">Apoiar</button>
        <button class="remover">Remover</button>
</div>


// ex6
// Um cartao precisa nascer ja apoiado: contagem em 1 e botao escrito Apoiado.
// O que voce mudaria no JavaScript para ele funcionar direito desde o primeiro clique?
// E por que a sua solucao nao serve para os outros cartoes?
// Exemplo lendo o estado inicial do próprio HTML:
document.querySelectorAll(".apoiar").forEach(function(botao) {

  let apoiado = (botao.textContent.trim() === "Apoiado");

  botao.addEventListener("click", function() {
    let cartao = botao.parentElement;
    let display = cartao.querySelector(".contagem");
    let valor = Number(display.textContent);

    if (apoiado) {
      valor--;
      botao.textContent = "Apoiar";
      apoiado = false;
    } else {
      valor++;
      botao.textContent = "Apoiado";
      apoiado = true;
    }
    display.textContent = valor;
  });
});
//Por que a solução de fixar apoiado = true não serve para os outros cartões

//Os outros cartões começam no estado oposto (contagem em 0 e texto "Apoiar"). Se você definir apoiado = true como padrão para todos no código, o JavaScript achará que os cartões normais já foram clicados. No primeiro clique em um cartão zerado, ele tentaria retirar um apoio existente em vez de adicionar, reduzindo a contagem incorretamente.