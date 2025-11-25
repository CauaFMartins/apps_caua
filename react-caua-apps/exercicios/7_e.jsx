import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function PasswordGenerator() {
  const [keyword, setKeyword] = useState("");
  const [password, setPassword] = useState("");

  function generate(v) {
    const reversed = v.split("").reverse().join("");
    const num = Math.floor(Math.random() * 90 + 10);
    const replaced = reversed.replace(/a/ig, "@").replace(/e/ig, "3").replace(/o/ig, "0").replace(/i/ig, "1");
    return `${replaced}${num}!`;
  }

  return (
    <section className="card">
      <input value={keyword} onChange={(e) => setKeyword(e.target.value)} placeholder="Palavra-chave" />
      <div className="row">
        <button onClick={() => setPassword(generate(keyword))}>Gerar senha</button>
        <button onClick={() => { setKeyword(""); setPassword(""); }}>Limpar</button>
      </div>
      <p className="muted">Senha gerada:</p>
      <pre className="password-output">{password}</pre>
    </section>
  );
}

export default PasswordGenerator;
