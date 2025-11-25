import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function MedidorFelicidade() {
  const [nivel, setNivel] = useState(0);

  const handleSorrir = () => {
    setNivel(nivel + 1);
  };

  const getEmoji = () => {
    if (nivel === 0) return "😐";
    if (nivel === 1) return "🙂";
    if (nivel === 2) return "😊";
    if (nivel === 3) return "😁";
    return "🤩";
  };

  return (
    <div>
      <h2>Medidor de Felicidade</h2>

      <p style={{ fontSize: "50px" }}>{getEmoji()}</p>

      <button onClick={handleSorrir}>Sorrir 😄</button>

      <p>Nível de Felicidade: {nivel}</p>
    </div>
  );
}

export default MedidorFelicidade;
