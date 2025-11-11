import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [visivel, setVisivel] = useState(false);
  const alternarVisibilidade = () => {
    setVisivel(!visivel)
  }

  return (
    <div className="quadrado">
      <div className="botoes">
        <button onClick={alternarVisibilidade}>
          {visivel ? 'Esconder' : 'Mostrar'}
        </button>
      </div>

      {visivel && (
        <div className="texto">
          <h2>Olá! Este é o texto que pode ser mostrado ou escondido.</h2>
        </div>
      )}
    </div>
  )
}


export default App;
