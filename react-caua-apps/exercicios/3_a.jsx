import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function ListaHobbies() {
  const hobbies = ["Leitura", "Natação", "Programação", "Culinária"];
  return (
    <div>
      <h2>Meus Hobbies Favoitos</h2>
      <ul className="hobbies">
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}

export default function App() {
  return <ListaHobbies/>;
}