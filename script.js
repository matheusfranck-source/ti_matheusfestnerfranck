// Componente do Cabeçalho
function Cabecalho() {
    return (
        <header>
            <h1>Radar da Vida Escolar</h1>
            <p>Aponte um problema da escola e apoie os que mais te atrapalham.</p>
        </header>
    );
}

// Componente reutilizável do Cartão
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

// Componente Principal que reúne a aplicação
function App() {
    // Vetor com os dados dos problemas mapeados
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

// Inicialização e renderização do React no elemento com id "root"
const raiz = ReactDOM.createRoot(document.getElementById("root"));
raiz.render(<App />);