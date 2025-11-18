import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function AlterarCorQuadrado() {
  const [cor, setCor] = useState('lilas');

  const obterCorHex = () => {
    switch (cor) {
      case 'lilas': return '#BC82CB';
      case 'verde': return '#23C023';
      case 'azul': return '#1E90FF';
      case 'fucsia': return '#FF00FF';
      default: return '#BC82CB';
    }
  };

  return (
    <div>
      <h2>Alterar Cor do Quadrado</h2>
      <button onClick={() => setCor('lilas')}>Lilas</button>
      <button onClick={() => setCor('verde')}>Verde</button>
      <button onClick={() => setCor('azul')}>Azul</button>
      <button onClick={() => setCor('fucsia')}>Fucsia</button>

      <div
        style={{
          backgroundColor: obterCorHex(),
          width: '200px',
          height: '200px',
          marginTop: '20px',
          border: '2px solid #000',
          borderRadius: '16px'
        }}
      ></div>
    </div>
  );
}

export default AlterarCorQuadrado;
