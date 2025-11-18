import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Scoreboard() {
  const [team, setTeam] = useState("");
  const [score, setScore] = useState("");
  const [teams, setTeams] = useState([]);

  function addTeam() {
    if (!team.trim() || isNaN(Number(score))) return;
    const t = { name: team.trim(), score: Number(score) };
    setTeams(prev => {
      const next = [...prev, t].sort((a,b) => b.score - a.score);
      return next;
    });
    setTeam(""); setScore("");
  }

  return (
    <section className="card">
      <div className="row">
        <input value={team} onChange={(e) => setTeam(e.target.value)} placeholder="Nome do time" />
        <input value={score} onChange={(e) => setScore(e.target.value)} placeholder="Pontuação" type="number" />
        <button onClick={addTeam}>Adicionar</button>
      </div>

      <ol className="score-list">
        {teams.map((t, i) => <li key={i}>{t.name} – <strong>{t.score}</strong></li>)}
      </ol>
    </section>
  );
}

export default Scoreboard;
