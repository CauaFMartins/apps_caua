import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function HoraData() {
  const agora = new Date();
  const diasSemana = [
    "domingo",
    "segunda-feira",
    "terça-feira",
    "quarta-feira",
    "quinta-feira",
    "sexta-feira",
    "sábado",
  ];

  const meses = [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",
  ];

  const diaSemana = diasSemana[agora.getDay()];
  const dia = agora.getDate();
  const mes = meses[agora.getMonth()];
  const ano = agora.getFullYear();

  return (
    <h1>
      Hoje é dia {dia} de {mes} de {ano}, <br />
      uma {diaSemana}
    </h1>
  );
}

export default function App() {
  return (
    <div className="App">
      <HoraData />
    </div>
  );
}