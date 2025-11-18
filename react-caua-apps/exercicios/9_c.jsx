import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function AlterarHumor() {
  const [humor, setHumor] = useState('triste');

  const obterCorHumor = () => {
    switch (humor) {
      case 'triste': return '#0093aa';
      case 'feliz': return '#feef9c';
      case 'entediado': return '#f6b069';
      case 'irritado': return '#ff0000';
      default: return '#ffffff';
    }
  };

  const obterEmoji = () => {
    switch (humor) {
      case 'triste': return '😢';
      case 'feliz': return '😊';
      case 'entediado': return '😐';
      case 'irritado': return '😡';
      default: return '🙂';
    }
  };

  return (
    <>
      <div>
        <h2>Alterar Humor</h2>
        <button onClick={() => setHumor('triste')}>Triste</button>
        <button onClick={() => setHumor('feliz')}>Feliz</button>
        <button onClick={() => setHumor('entediado')}>Entediado</button>
        <button onClick={() => setHumor('irritado')}>Irritado</button>
      </div>

      <div
        style={{
          backgroundColor: obterCorHumor(),
          width: '200px',
          height: '200px',
          marginTop: '20px',
          border: '2px solid #000',
          borderRadius: '16px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '48px'
        }}
      >
        <div className="humor">{obterEmoji()}</div>
      </div>
    </>
  );
}

export default AlterarHumor;
