import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function ScoreboardEditable() {
  const [team, setTeam] = useState("");
  const [score, setScore] = useState("");
  const [teams, setTeams] = useState([]);

  function add() {
    if (!team.trim() || isNaN(Number(score))) return;
    setTeams(prev => [...prev, { id: Date.now() + Math.random(), name: team.trim(), score: Number(score) }].sort((a,b) => b.score - a.score));
    setTeam(""); setScore("");
  }

  function editScore(id) {
    const newScore = prompt("Nova pontuação:");
    if (newScore === null) return;
    if (isNaN(Number(newScore)) || !newScore.trim()) {
      alert("Insira um número"); 
      return;
    }
    setTeams(prev => prev.map(t => t.id === id ? { ...t, score: Number(newScore) } : t).sort((a,b) => b.score - a.score));
  }

  function remove(id) {
    setTeams(p => p.filter(t => t.id !== id));
  }

  return (
    <section className="card">
      <div className="row">
        <input value={team} onChange={(e)=>setTeam(e.target.value)} placeholder="Nome do time" />
        <input value={score} onChange={(e)=>setScore(e.target.value)} placeholder="Pontuação" type="number" />
        <button onClick={add}>Adicionar</button>
      </div>

      <ol className="score-list">
        {teams.map(t =>
          <li key={t.id}>
            <strong>{t.score}</strong> – {t.name}
            <div className="inline-controls">
              <button className="small" onClick={()=>editScore(t.id)}>Editar</button>
              <button className="small danger" onClick={()=>remove(t.id)}>Remover</button>
            </div>
          </li>
        )}
      </ol>
    </section>
  );
}

export default ScoreboardEditable;
