import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function PrevisaoTempo({ temperatura, clima, cidade, umidade }) {
  const icones = {
    "ensolarado": "☀️",
    "nublado": "☁️",
    "chuvoso": "🌧️",
    "tempestade": "⛈️",
    "neve": "❄️",
  };

  function getEmoji(clima, umidade) {
    if (clima === "ensolarado") return "☀️";
    if (clima === "nublado") return "☁️";
    if (clima === "chuvoso") return "🌧️";
    if (clima === "tempestade") return "⛈️";
    return "❓";
  }

  return (
    <div style={{
      border: "2px solid #000",
      borderRadius: "12px",
      width: "250px",
      padding: "10px",
      textAlign: "center",
      background: "linear-gradient(#e3f2fd, #90caf9)",
      margin: "10px auto"
    }}>
      <h2 style={{ margin: "10px 0" }}>{cidade}</h2>
      <h3 style={{ transition: "opacity .3s" }}>
        {getEmoji(clima, umidade)} {clima}
      </h3>

      <p>Temperatura: {temperatura}°C</p>
      <p>Umidade: {umidade}%</p>
    </div>
  );
}

function App() {
  return (
    <div style={{
      display: "flex",
      gap: "20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
      padding: "20px"
    }}>
      <PrevisaoTempo temperatura={31} clima="ensolarado" cidade="Rio de Janeiro" umidade={54} />
      <PrevisaoTempo temperatura={21} clima="nublado" cidade="São Paulo" umidade={69} />
      <PrevisaoTempo temperatura={27} clima="chuvoso" cidade="Curitiba" umidade={90} />
      <PrevisaoTempo temperatura={12} clima="nevando" cidade="Gramado" umidade={89} />
    </div>
  );
}

export default App;
