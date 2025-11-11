import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Contador() {
  const [count, setCount] = useState(20);

  const aumentar = () => {
    setCount(prev => prev + 2);
  };

  const diminuir = () => {
    setCount(prev => prev - 2);
  };

  const getClasseFundo = () => {
    if (count > 20) return 'mais';
    if (count < 20) return 'menos';
    return '';
  };

  return (
    <div className="wrapper">
      <div className={`container ${getClasseFundo()}`}>
        <h2>Temperatura: {count}°C</h2>
        <div className="botoes">
          <button className="btn-azul" onClick={diminuir}>-2</button>
          <button className="btn-vermelho" onClick={aumentar}>+2</button>
        </div>
      </div>
    </div>
  );
}


function App() {
  return (
   <Contador/>
  );
}

export default App;
