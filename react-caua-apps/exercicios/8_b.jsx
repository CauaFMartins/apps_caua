import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function TodoList() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  function add() {
    if (!task.trim()) return;

    setTodos(t => [...t, { text: task.trim(), done: false }]);
    setTask("");
  }

  function toggle(i) {
    setTodos(t =>
      t.map((it, idx) =>
        idx === i ? { ...it, done: !it.done } : it
      )
    );
  }

  function remove(i) {
    setTodos(t => t.filter((_, idx) => idx !== i));
  }

  return (
    <section className="card">
      <div className="row">
        <input
          value={task}
          onChange={e => setTask(e.target.value)}
          placeholder="Nova tarefa"
        />
        <button onClick={add}>Nova Tarefa</button>
      </div>

      <ul>
        {todos.map((t, i) => (
          <li key={i} className={t.done ? "done" : ""}>
            <span
              onClick={() => toggle(i)}
              style={{ cursor: "pointer" }}
            >
              {t.text}
            </span>

            <button className="small" onClick={() => remove(i)}>
              Remover
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default TodoList;
