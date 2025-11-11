import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function ComidaBoa() {
  const comidas = ["Lasanha", "Batata", "Jujuba", "Amendoim"];
  return (
    <div>
      <h2>Minhas Comidas Favoritas</h2>
      <ul className="comida">
        {comidas.map((comida, index) => (
          <li key={index}>{comida}</li>
        ))}
      </ul>
    </div>
  );
}

export default function App() {
  return <ComidaBoa/>;
}