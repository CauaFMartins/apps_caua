import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function StatusJogo({ nivel, pontos }) {
  const maxPontos = nivel * 1000;
  const progresso = (pontos / maxPontos) * 100;

  const corBarra =
    progresso < 30 ? "red" : progresso < 70 ? "orange" : "green";

  return (
    <div>
      <p>Nível {nivel}</p>
      <p>Pontos: {pontos} / {maxPontos}</p>

      <div
        style={{
          width: "200px",
          height: "20px",
          backgroundColor: "#ddd",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${progresso}%`,
            height: "100%",
            backgroundColor: corBarra,
            transition: "all 0.25s ease",
          }}
        ></div>
      </div>

      <p>{progresso.toFixed(1)}% completo</p>
    </div>
  );
}

export default function App() {
  return <StatusJogo nivel={10} pontos={5000} />;
}