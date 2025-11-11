import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function CartaoPessoa({ nome, idade, profissao }) {
  return (
    <div className="cartao-pessoa">
      <h2>{nome}</h2>
      <p>
        <strong>Idade:</strong> {idade} anos
      </p>
      <p>
        <strong>Profissão:</strong> {profissao}
      </p>
    </div>
  );
}



export default function App() {
  return (
    <div className="App">
      <CartaoPessoa 
        nome="Alberto" 
        idade={76} 
        profissao="Aposentado" 
      />
    </div>
  );
}

