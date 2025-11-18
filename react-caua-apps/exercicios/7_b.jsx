import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function InputUppercaseH2() {
  const [text, setText] = useState("");
  return (
    <section className="card">
      <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Digite..." />
      <h2 className="uppercase-preview">{text.toUpperCase()}</h2>
    </section>
  );
}

export default InputUppercaseH2
