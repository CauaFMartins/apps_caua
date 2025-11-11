import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function MenuRestaurante() {
  const pratos = [
    {
      nome: "Lasanha Bolonhesa",
      preco: 29.9,
      descricao: "Massa em camadas com molho bolonhesa, queijo e bechamel.",
    },
    {
      nome: "Feijoada",
      preco: 42.5,
      descricao: "Prato típico brasileiro com feijão preto, carnes e acompanhamentos.",
    },
    {
      nome: "Sushi Variado",
      preco: 50.9,
      descricao: "Seleção de sushis e sashimis frescos, acompanhados de shoyu e wasabi.",
    },
    {
      nome: "Pizza Margherita",
      preco: 39.9,
      descricao:
        "Deliciosa com molho de tomate, mussarela de búfala e manjericão fresco.",
    },
    {
      nome: "Strogonoff de Frango",
      preco: 27.5,
      descricao: "Cubos de frango ao molho cremoso de creme de leite e champignon, servido com arroz e batata palha.",
    },
  ];

  return (
    <div>
      <h2>Cardápio do Restaurante</h2>
      <ul className="menu-lista">
        {pratos.map((prato, index) => (
          <li key={index} className="prato-card">
            <h3>{prato.nome}</h3>
            <p className="preco">Preço: {prato.preco.toFixed(2)}</p>
            <p className="descricao">{prato.descricao}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}


export default function App() {
  return <MenuRestaurante/>;
}