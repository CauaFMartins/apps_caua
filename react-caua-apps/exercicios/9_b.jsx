import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function AlterarTamanhoFonte() {
  const [tamanho, setTamanho] = useState('medium');

  const mudarTamanho = (novoTamanho) => {
    setTamanho(novoTamanho);
  };

  const getTamanhoFonte = () => {
    switch (tamanho) {
      case 'small': return '14px';
      case 'medium': return '18px';
      case 'large': return '24px';
      case 'xlarge': return '32px';
      default: return '18px';
    }
  };

  return (
    <>
      <h2>Alterar tamanho da fonte</h2>
      <button onClick={() => mudarTamanho('small')}>Pequeno</button>
      <button onClick={() => mudarTamanho('medium')}>Médio</button>
      <button onClick={() => mudarTamanho('large')}>Grande</button>
      <button onClick={() => mudarTamanho('xlarge')}>Extra Grande</button>

      <div
        style={{
          fontSize: getTamanhoFonte(),
          marginTop: '20px',
          padding: '12px',
          border: '1px solid #000',
          borderRadius: '20px'
        }}
      >
        Esse texto muda conforme clica os botões!
      </div>
    </>
  );
}

export default AlterarTamanhoFonte;

