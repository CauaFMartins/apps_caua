import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function InputRealtime() {
  const [text, setText] = useState("");
  return (
    <section className="card">
      <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Digite..." />
      <p>Você digitou: <strong>{text}</strong></p>
    </section>
  );
}

export default InputRealtime


