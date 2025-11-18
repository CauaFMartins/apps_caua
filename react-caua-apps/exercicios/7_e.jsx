import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function AddList() {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);

  function add() {
    if (!value.trim()) return;
    setList(s => [...s, value.trim()]);
    setValue("");
  }

  return (
    <section className="card">
      <input
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Novo item"
      />
      <button onClick={add}>Adicionar</button>

      <ul>
        {list.map((it, i) => (
          <li key={i}>{it}</li>
        ))}
      </ul>
    </section>
  );
}


export default AddList;
