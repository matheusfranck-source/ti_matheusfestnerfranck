// 1. Componente de Cabeçalho
function Cabecalho() {
    return (
        <header>
            <h1>Radar da Vida Escolar</h1>
            <p>Aponte um problema da escola e apoie os que mais te atrapalham.</p>
        </header>
    );
}

// 2. Componente reusável para os cartões
function Cartao(props) {
    return (
        <div className="cartao">
            <h2>{props.titulo}</h2>
            <p>{props.descricao}</p>
            <p>Apoios: <span className="contagem">0</span></p>
            <button className="apoiar">Apoiar</button>
            <button className="remover">Remover</button>
        </div>
    );
}

// 3. Componente principal da aplicação
function App() {
    // Vetor de dados para iterar com .map()
    const problemas = [
        {
            id: 1,
            titulo: "Bebedouro do corredor",
            descricao: "O bebedouro vaza desde março e forma poça no piso."
        },
        {
            id: 2,
            titulo: "Fila da cantina",
            descricao: "A fila toma quase todo o intervalo dos alunos."
        },
        {
            id: 3,
            titulo: "Iluminação da quadra",
            descricao: "Metade das lâmpadas está queimada há dois meses."
        }
    ];

    return (
        <div>
            <Cabecalho />
            <main>
                {problemas.map((p) => (
                    <Cartao key={p.id} titulo={p.titulo} descricao={p.descricao} />
                ))}
            </main>
        </div>
    );
}

// 4. Inicialização do React DOM e renderização na div #root
const raiz = ReactDOM.createRoot(document.getElementById("root"));
raiz.render(<App />);