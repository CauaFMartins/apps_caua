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
          {visivel ? 'Esconder Foto' : 'Mostrar Foto'}
        </button>
      </div>

      {visivel && (
        <div>
          <h2>
            <img src="https://www.tricurioso.com/wp-content/uploads/2018/09/curiosidades-de-avatar-3.jpg" />
          </h2>
        </div>
      )}
    </div>
  )
}

export default App;
