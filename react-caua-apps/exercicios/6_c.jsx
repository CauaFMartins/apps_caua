import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function CofreDigital() {
  const [aberto, setAberto] = useState(false)
  const items = ['Colar de diamantes 💎', 'Relógio de ouro ⌚', 'Moedas antigas 💴', 'Documentos importantes 📄'];
  const alternarCofre = () => {
    setAberto(!aberto)
  }

  return (
    <div className="cofre-container">
      <h2>{aberto ? '🔓 Cofre Aberto' : '🔒 Cofre Trancado'}</h2>

      <button onClick={alternarCofre}>
        {aberto ? 'Fechar Cofre' : 'Abrir Cofre'}
      </button>

      {aberto && (
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default CofreDigital

