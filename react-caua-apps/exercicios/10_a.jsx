import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function BasicCalculator() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [op, setOp] = useState("");
  const [result, setResult] = useState(null);

  function calc() {
    const x = parseFloat(a);
    const y = parseFloat(b);
    if (isNaN(x) || isNaN(y)) { setResult("Insira números válidos"); return; }
    let r;
    if (op === "+") r = x + y;
    else if (op === "-") r = x - y;
    else if (op === "*") r = x * y;
    else if (op === "/") r = y === 0 ? "Erro: divisão por zero" : x / y;
    setResult(r);
  }

  return (
    <section className="card">
      <div className="row">
        <input value={a} onChange={(e)=>setA(e.target.value)} placeholder="Número 1" />
        <select value={op} onChange={(e)=>setOp(e.target.value)}>
          <option value=""></option>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
        <input value={b} onChange={(e)=>setB(e.target.value)} placeholder="Número 2" />
      </div>
      <button onClick={calc}>Calcular</button>

      <p>Resultado: <strong>{String(result)}</strong></p>
    </section>
  );
}

export default BasicCalculator;
