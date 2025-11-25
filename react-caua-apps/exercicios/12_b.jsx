import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function BotaoFavoritar() {
  const [favoritos, setFavoritos] = useState(0);
  const [isFavorito, setIsFavorito] = useState(false);

  const handleFavoritar = () => {
    setFavoritos(favoritos + 1);
    setIsFavorito(!isFavorito);
  };

  return (
    <div>
      <button onClick={handleFavoritar} style={{ fontSize: "24px" }}>
        {isFavorito ? "⭐" : "☆"} Favoritar
      </button>
      <p>Favoritos: {favoritos}</p>
    </div>
  );
}

export default BotaoFavoritar;