// ex1
// O texto de um link deve descrever o destino ("Escolas") para que o utilizador entenda para onde será redirecionado mesmo fora do contexto do parágrafo[cite: 18, 21].
// Quem é mais prejudicado pelo "clique aqui" são os utilizadores de leitores de ecrã (deficientes visuais), pois eles frequentemente navegam ouvindo apenas uma lista com os links da página[cite: 18, 21]. Ouvir "clique aqui" repetidamente não traz nenhuma informação sobre o destino do link[cite: 18, 21].


// ex2
// Ambos deixam o texto em negrito visualmente no navegador[cite: 18, 21]. Contudo, a tag <b> altera apenas a aparência estética (estilo visual)[cite: 18, 21], enquanto a tag <strong> atribui significado semântico de importância ao conteúdo[cite: 18, 21]. Leitores de ecrã alteram o tom de voz para dar ênfase a um texto dentro de <strong>, o que não ocorre com o <b>[cite: 18, 21].


// ex3
// O erro é usar tags <br> empilhadas (<br><br><br>) para tentar criar espaçamento vertical entre os elementos[cite: 18, 21]. Espaçamento entre blocos é responsabilidade do CSS (usando margin)[cite: 18, 21].
// Código corrigido:
// <p>Radar de Evasao<br>NRE Cascavel</p>
// (O espaçamento abaixo deve ser ajustado via CSS no container do texto, ex: margin-bottom)[cite: 21].


// ex4
// Link para site externo abrindo em nova aba com a trava de segurança necessária[cite: 18, 21]:
// <a href="https://www.apoio.exemplo.org" target="_blank" rel="noopener">Canal de apoio</a>


// ex5
// Foram criados os novos arquivos index.html e styles.css do projeto Radar de Evasão[cite: 16, 20, 21]. A primeira coisa conferida no navegador foi a presença dos links sem marcadores de lista ou sublinhados e o destaque de fundo no item ativo ("Mapa de risco")[cite: 19, 20, 21]. Um detalhe a atentar foi garantir a inclusão de list-style: none para remover as bolinhas padrão da tag <ul>[cite: 19, 20, 21].


// ex6
// Tokens de cor importados do Figma para o :root[cite: 16, 17, 21]:
// 1. --bg-primary (#2D2A6E)
// 2. --canvas (#F8FAFC)
// 3. --surface (#FFFFFF)
// 4. --muted (#F1F5F9)
//
// Aplicação na barra lateral[cite: 19, 20, 21]:
// - O token var(--surface) foi aplicado no fundo da sidebar (.sidebar { background-color: var(--surface); })[cite: 19, 20].
// - O token var(--bg-primary) foi aplicado no texto do item ativo e no contorno de foco (.menu a.ativo e .menu a:focus)[cite: 20].