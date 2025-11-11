import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function CartaoLivro({ titulo, autor, ano, genero }) {
  return (
    <div className="cartao-livro">
      <h2>
        <strong>Título: </strong>
        {titulo}
      </h2>
      <p>
        <strong>Autor :</strong>
        {autor}
      </p>
      <p>
        <strong>Gênero :</strong>
        {genero}
      </p>
      <p>
        <strong>Ano: </strong> {ano}
      </p>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <CartaoLivro
        titulo="Os Instrumentos Mortais-Cidade do Fogo Celestial"
        autor="Cassandra Clare"
        genero="Romance/Fantasia"
        ano="2014"
      />
    </div>
  );
}
