// ex1
// Se a linha <link rel="stylesheet" href="styles.css"> for apagada, o HTML continua igual, mas a página aparece totalmente sem estilo ("pelada").
// O navegador exibirá a página em preto e branco, sem cores de fundo, sem espaçamentos e com tudo alinhado à esquerda na ordem do HTML.
// O arquivo styles.css existir na pasta não altera nada se o navegador não for avisado para lê-lo.

// ex2
// Não, o atributo defer não era desnecessário.
// O script funcionou porque, ao estar no fim do <body>, a página e seus elementos HTML já tinham terminado de carregar antes do script rodar.
// Se o script estivesse no <head> sem o atributo defer, a busca por elementos via querySelector falharia.
// O defer é importante porque garante que o JavaScript só rode após a montagem da página, independente de onde a tag esteja declarada.

// ex3
/*
:root {
  --vermelho-urgente: #C00000;
}

.cartao-urgente {
  border: 3px solid var(--vermelho-urgente);
}

.titulo-urgente {
  color: var(--vermelho-urgente);
}
*/
// Reutiliza-se a variável --vermelho-urgente declarada em :root para evitar a repetição do código de cor.

// ex4
// Para garantir que o Radar continuou funcionando após a separação dos arquivos, foram conferidos os seguintes pontos:
// 1. Se os caminhos no <link href="styles.css"> e no <script src="script.js" defer> apontavam para a mesma pasta do index.html.
// 2. Se as tags <style> e <script> antigas foram removidas do index.html para não duplicar estilos ou rotinas.
// 3. Se as interações de clique do botão continuavam alterando o texto e se os estilos visuais foram mantidos.

// ex5
// Nomes de variáveis escolhidos com base no papel desempenhado no layout:
// 1. --azul-principal: Define a cor do cabeçalho e elementos primários de destaque.
// 2. --azul-claro: Define a cor utilizada nas bordas dos cartões e detalhes secundários.
// 3. --espaco-padrao: Define o valor unificado de espaçamento (padding) interno de cartões e cabeçalhos.
// 4. --borda-arredondada: Padroniza o arredondamento de cantos dos elementos visuais da interface.