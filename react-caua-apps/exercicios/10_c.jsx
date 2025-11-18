import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function CurrencyConverter() {
  const rates = {
    "BRL": { "USD": 0.20, "EUR": 0.18, "BRL": 1 },
    "USD": { "BRL": 5.0, "EUR": 0.90, "USD": 1 },
    "EUR": { "BRL": 5.5, "USD": 1.12, "EUR": 1 }
  };

  const [from, setFrom] = useState("BRL");
  const [to, setTo] = useState("USD");
  const [value, setValue] = useState("");
  const [result, setResult] = useState(null);

  function convert() {
    const v = parseFloat(value);
    if (isNaN(v)) { setResult("Valor inválido"); return; }
    const rate = rates[from][to];
    setResult((v * rate).toFixed(2));
  }

  return (
    <section className="card">
      <div className="row">
        <input value={value} onChange={(e)=>setValue(e.target.value)} placeholder="Valor" />

        <select value={from} onChange={(e)=>setFrom(e.target.value)}>
          <option value="BRL">BRL/BRL</option>
          <option value="USD">USD/USD</option>
          <option value="EUR">EUR/EUR</option>
        </select>

        <span>→</span>

        <select value={to} onChange={(e)=>setTo(e.target.value)}>
          <option value="BRL">BRL/BRL</option>
          <option value="USD">USD/USD</option>
          <option value="EUR">EUR/EUR</option>
        </select>
      </div>

      <button onClick={convert}>Converter</button>

      <p>Resultado:
        <strong>{result !== null ? `${result} ${to}` : "-"}</strong>
      </p>

      <p className="muted">Observação: taxas fixas de exemplo; troque conforme necessário.</p>
    </section>
  );
}

export default CurrencyConverter;
