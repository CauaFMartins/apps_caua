import './App.css';

const DADOS_DASHBOARD_ZETA = {
  comandante: 'Capitão Kira',
  destino: {
    nome: 'Nebulosa de Orion (Setor C)',
    temperatura: 'Variável (120K)',
    gravidade: '0.8 G (Baixa)',
    descricao: 'Zona de coleta de hidrogênio molecular para abastecimento da frota. Risco de turbulência.',
    clima: 'turbulento', 
  },
  missao: {
    status: 'Alerta: Aproximação da Nebulosa',
    progresso: 91,
  },
  climaEspacial: [ 
    { nome: 'Campo Magnético', valor: '3.2 Tesla(Estável)', simbolo: '📡', condicao: 'bom' }, 
    { nome: 'Densidade de Partículas', valor: 'Alta(Alerta N°2)', simbolo: '⚛️', condicao: 'alerta' },
    { nome: 'Flutuação Temporal', valor: '0.00%(Normal)', simbolo: '⏳', condicao: 'ok' },
  ],
  relatorio: [ 
    { id: 1, evento: 'Reajuste do campo de contenção gravitacional.', data: '22/09/2025' },
    { id: 2, evento: 'Entrada na órbita de Júpiter para impulso gravitacional.', data: '25/09/2025' },
    { id: 3, evento: 'Monitoramento de falha no sensor de velocidade Z.', data: '27/09/2025' },
    { id: 4, evento: 'Início da fase de aproximação ao alvo.', data: '28/09/2025' },
  ]
};

function formatarDataGalacticaZeta(nomePlaneta) {
  const agora = new Date();
  const tempoGalactico = agora.toLocaleTimeString('pt-BR', { hour12: false }); 
  const dataGalactica = agora.toLocaleDateString('pt-BR');
  return `ALVO: ${nomePlaneta} // ${dataGalactica} ${tempoGalactico} BETA`;
}

function InfoBox({ titulo, conteudo, alerta = false, destaque = false }) {
    const boxClass = `info-box ${alerta ? 'alerta' : ''} ${destaque ? 'destaque' : ''}`;
    return (
        <div className={boxClass}>
            <h3 className="box-titulo">{titulo}</h3>
            <div className="box-conteudo">{conteudo}</div>
        </div>
    );
}

export default function DashboardEspacial() {
  
  const { comandante, destino, missao, climaEspacial, relatorio } = DADOS_DASHBOARD_ZETA;
  
  const statusAlerta = missao.progresso > 90 || missao.status.includes('Alerta');

  const barraProgresso = (
    <div className="barra-progresso-zeta">
      <div 
        className="barra" 
        style={{ width: `${missao.progresso}%` }}
      >
        {missao.progresso}%
      </div>
      <span className="status-texto">{missao.status}</span>
    </div>
  );

  const detalhesDestino = (
    <div className="detalhes-destino-zeta">
      <p className="clima-zeta">Condição: {destino.clima.toUpperCase()}</p>
      <p>Temperatura: {destino.temperatura}</p>
      <p>Gravidade: {destino.gravidade}</p>
      <p className="descricao-zeta">{destino.descricao}</p>
    </div>
  );

  const previsaoEspacial = (
    <div className="previsao-zeta-grid">
      {climaEspacial.map((dado, index) => (
        <div key={index} className={`previsao-item item-${dado.condicao}`}>
          <span className="simbolo-zeta">{dado.simbolo}</span>
          <p className="nome-zeta">{dado.nome}</p>
          <p className="valor-zeta">{dado.valor}</p>
        </div>
      ))}
    </div>
  );

  const relatorioBordo = (
    <ol className="relatorio-beta">
      {relatorio.map((item, index) => (
        <li key={item.id}>
          [{index + 1} | {item.data}] {item.evento}
        </li>
      ))}
    </ol>
  );

  return (
    <div className="dashboard-zeta">
      
      <header className="header-beta">
        <h1 className="titulo-beta">INTERFACE DE NAVEGAÇÃO BETA </h1> 
        <p className="saudacao-zeta">
            Olá, {comandante} // {destino.nome}
        </p>
        <p className="data-zeta">
            {formatarDataGalacticaZeta(destino.nome)}
        </p>
      </header>

      <main className="main-feed">
        <h2 className="feed-titulo"> Nebulosa de Orion - CHEGADA </h2>

        <InfoBox 
            titulo="// STATUS DA MISSÃO"
            conteudo={barraProgresso}
            alerta={statusAlerta}
            destaque={true}
        />
        
        <InfoBox 
            titulo={`// ALVO: ${destino.nome.toUpperCase()}`}
            conteudo={detalhesDestino}
        />

        <InfoBox 
            titulo="// PREVISÃO DO TEMPO ESPACIAL"
            conteudo={previsaoEspacial}
        />

        <InfoBox 
            titulo="// COMANDO DE BORDO E EVENTOS"
            conteudo={relatorioBordo}
        />
      </main>
    </div>
  );
}