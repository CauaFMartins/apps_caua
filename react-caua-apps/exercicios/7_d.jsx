import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function CharCounter() {
  const MAX = 50;
  const [text, setText] = useState("");

  function handleChange(e) {
    const v = e.target.value;
    if (v.length <= MAX) setText(v);
    else setText(v.slice(0, MAX));
  }

  return (
    <section className="card">
      <textarea
        value={text}
        onChange={handleChange}
        maxLength={MAX}
        placeholder="Escreva (max 50)"
      />

      <p className="muted">{text.length}/{MAX}</p>
      <p>Preview: {text}</p>
    </section>
  );
}


export default CharCounter;
