import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function RectangleArea() {
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [area, setArea] = useState(null);

  function calc() {
    const l = parseFloat(length);
    const w = parseFloat(width);
    if (isNaN(l) || isNaN(w)) { setArea("Insira valores válidos"); return; }
    setArea(l * w);
  }

  return (
    <section className="card">
      <div className="row">
        <input value={length} onChange={(e)=>setLength(e.target.value)} placeholder="Comprimento" />
        <input value={width} onChange={(e)=>setWidth(e.target.value)} placeholder="Largura" />
      </div>
      <button onClick={calc}>Calcular Área</button>

      <p>Área: <strong>{String(area)}</strong></p>
    </section>
  );
}

export default RectangleArea;
