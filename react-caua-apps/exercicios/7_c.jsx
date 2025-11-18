import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function ValidatedInput() {
  const [text, setText] = useState("");
  const valid = text.length >= 3;

  return (
    <section className="card">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Mínimo 3 chars"
        style={{
          border: "2px solid",
          borderColor: valid ? "green" : "red",
          padding: "8px",
          outline: "none",
          borderRadius: "6px"
        }}
      />

      <p
        style={{
          color: valid ? "green" : "red",
          fontWeight: "bold",
          marginTop: "8px"
        }}
      >
        {valid ? "Texto válido!" : "Digite pelo menos 3 caracteres"}
      </p>
    </section>
  );
}

export default ValidatedInput;
