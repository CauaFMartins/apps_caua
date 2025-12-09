import React, { useContext, useState } from 'react';
import Header from './components/Header';
import ListaMusicas from './components/ListaMusicas';
import Playlists from './components/Playlists';
import Player from './components/Player';
import { MusicContext } from './context/MusicContext';
import './styles/header.css';
import './styles/listamusicas.css';
import './styles/player.css';
import './styles/playlists.css';

export default function App() {
  const { library } = useContext(MusicContext);
  const [query, setQuery] = useState('');

  return (
    <div className="app-root">
      <Header onSearch={setQuery} />
      <main className="app-main">
        <aside className="left-column">
          <Playlists />
        </aside>
        <section className="center-column">
          <ListaMusicas songs={library} searchQuery={query} />
        </section>
        <aside className="right-column">
          {/* espaço para detalhes, recomendados, ou perfil */}
          <div className="card">Recomendações</div>
        </aside>
      </main>
      <Player />
    </div>
  );
}

