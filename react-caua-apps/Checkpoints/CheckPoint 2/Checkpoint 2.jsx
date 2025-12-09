import React, { useState, useEffect } from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

function Combat({ hp, setHp }) {
  const CRITICAL_THRESHOLD = 30;

  function heal() {
    setHp(prev => clamp(prev + 10, 0, 100));
  }
  function takeDamage() {
    setHp(prev => clamp(prev - 15, 0, 100));
  }

  const hpColor = hp > 70 ? "green" : hp >= 30 ? "yellow" : "red";
  const isCritical = hp < CRITICAL_THRESHOLD;

  return (
    <div className="card">
      <h3>Sistema de Combate</h3>
      <div className="hp-row">
        <div className={`hp-bar ${hpColor}`} style={{ width: `${hp}%` }}>
          <span className="hp-text">{hp} HP</span>
        </div>
        <div className="hp-actions">
          <button onClick={heal}>Curar (+10) [poção]</button>
          <button onClick={takeDamage} className="danger">Dano (-15)</button>
        </div>
      </div>

      {isCritical && (
        <div className="critical-box">
          Vida crítica!
        </div>
      )}
    </div>
  );
}

function XPSystem({ xp, setXp, level, setLevel }) {
  const XP_PER_LEVEL = 300;

  useEffect(() => {
    if (xp >= XP_PER_LEVEL) {
      const levelsGained = Math.floor(xp / XP_PER_LEVEL);
      setLevel(prev => prev + levelsGained);
      setXp(prev => prev - levelsGained * XP_PER_LEVEL);
    }
  }, [xp, setLevel, setXp]);

  const progressPercent = (xp / XP_PER_LEVEL) * 100;

  return (
    <div className="card">
      <h3>Sistema de Experiência e Níveis</h3>
      <div className="level-row">
        <div className="level-info">
          <strong>Nível {level}</strong>
          <div className="xp-bar-bg">
            <div className="xp-bar" style={{ width: `${progressPercent}%` }} />
          </div>
          <small>{xp} / 300 XP</small>
        </div>

        <div className="xp-actions">
          <button onClick={() => setXp(prev => prev + 100)}>Completar missão (+100 XP)</button>
          <button onClick={() => setXp(prev => prev + 50)}>Derrotar inimigo (+50 XP)</button>
        </div>
      </div>
    </div>
  );
}

function Inventory({ inventory, setInventory, backpackOpen, setBackpackOpen, gold, setGold }) {
  function toggleBackpack() {
    setBackpackOpen(prev => !prev);
  }

  function buyItem(item) {
    if (gold < item.price) return alert("Ouro insuficiente");
    setGold(prev => prev - item.price);
    setInventory(prev => [...prev, item.name]);
  }

  const shopItems = [
    { name: "Poção de Vida", price: 15 },
    { name: "Espada Curta", price: 40 },
    { name: "Mapa Antigo", price: 20 },
  ];

  return (
    <div className="card">
      <h3>Inventário do Aventureiro</h3>
      <div className="row">
        <button onClick={toggleBackpack}>
          {backpackOpen ? "Fechar Mochila" : "Abrir Mochila"} {backpackOpen ? "📂" : "🎒"}
        </button>
        <div className="muted">Itens: {inventory.length}</div>
      </div>

      {backpackOpen && (
        <ul className="inventory-list">
          {inventory.length === 0 ? <li className="muted">Mochila vazia</li> :
            inventory.map((it, i) => <li key={i}>{it}</li>)
          }
        </ul>
      )}

      <div className="shop">
        <h4>Loja rápida</h4>
        <div className="shop-grid">
          {shopItems.map((it, idx) => (
            <div key={idx} className="shop-item">
              <div>{it.name}</div>
              <div>{it.price} 🪙</div>
              <button onClick={() => buyItem(it)}>Comprar</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function QuestLog({ quests, setQuests, completeCount, setCompleteCount, gold, setGold, setXp }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Principal");

  function addQuest() {
    if (!text.trim()) return;
    setQuests(prev => [...prev, { id: Date.now(), text: text.trim(), category, done: false }]);
    setText("");
  }

  function toggleDone(id) {
    setQuests(prev => prev.map(q => {
      if (q.id === id) {
        const newDone = !q.done;
        if (!q.done && newDone) { 
          setCompleteCount(c => c + 1);
          setGold(g => g + 25);   
          setXp(x => x + 100);       
        } else if (q.done && !newDone) { 
          setCompleteCount(c => Math.max(0, c - 1));
         
        }
        return { ...q, done: newDone };
      }
      return q;
    }));
  }

  function removeQuest(id) {
    setQuests(prev => prev.filter(q => q.id !== id));
  }

  return (
    <div className="card">
      <h3>Diário de Missões</h3>
      <div className="row">
        <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Nova missão..." />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option>Principal</option>
          <option>Secundária</option>
          <option>Urgente</option>
        </select>
        <button onClick={addQuest}>Adicionar</button>
      </div>

      <div className="muted">Completas: {completeCount}</div>

      <ul className="quest-list">
        {quests.length === 0 && <li className="muted">Nenhuma missão ativa</li>}
        {quests.map(q => (
          <li key={q.id} className={`quest-item ${q.done ? "done" : ""}`}>
            <div className="quest-left">
              <input type="checkbox" checked={q.done} onChange={() => toggleDone(q.id)} />
              <div>
                <div className="quest-text">{q.text}</div>
                <small className="muted">{q.category}</small>
              </div>
            </div>
            <div>
              <button className="small" onClick={() => removeQuest(q.id)}>Remover</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function EnchantGenerator() {
  const [word, setWord] = useState("");
  const [ench, setEnch] = useState("");

  function generate(w) {
    
    const inv = w.split("").reverse().join("");
    const replaced = inv.replace(/a/ig, "@").replace(/e/ig, "3").replace(/o/ig, "0").replace(/s/ig, "$");
    const stamp = Math.floor(Math.random() * 900 + 100);
    return `${replaced}${stamp}`;
  }

  function handleGenerate() {
    if (!word.trim()) return setEnch("");
    setEnch(generate(word.trim()));
  }

  return (
    <div className="card">
      <h3>Gerador de Encantamentos</h3>
      <div className="row">
        <input value={word} onChange={(e) => setWord(e.target.value)} placeholder="Palavra mágica base" />
        <button onClick={handleGenerate}>Gerar</button>
      </div>
      <div className="muted">Encantamento:</div>
      <pre className="ench-output">{ench || "—"}</pre>
    </div>
  );
}

function PartyRanking({ party, setParty }) {
  const [name, setName] = useState("");
  const [level, setLevel] = useState(1);
  const [cls, setCls] = useState("Guerreiro");

  function addMember() {
    if (!name.trim()) return;
    setParty(prev => [...prev, { id: Date.now()+Math.random(), name: name.trim(), level: Number(level), class: cls }].sort((a,b)=> b.level - a.level));
    setName(""); setLevel(1);
  }

  function editLevel(id) {
    const newLevel = prompt("Novo nível:");
    if (newLevel === null) return;
    const n = Number(newLevel);
    if (isNaN(n) || n < 1) return alert("Nível inválido");
    setParty(prev => prev.map(p => p.id === id ? { ...p, level: n } : p).sort((a,b)=> b.level - a.level));
  }

  function removeMember(id) {
    setParty(prev => prev.filter(p => p.id !== id));
  }

  return (
    <div className="card">
      <h3>Ranking dos Heróis</h3>
      <div className="row">
        <input value={name} onChange={(e)=>setName(e.target.value)} placeholder="Nome do companheiro" />
        <input value={level} onChange={(e)=>setLevel(e.target.value)} type="number" min="1" />
        <select value={cls} onChange={(e)=>setCls(e.target.value)}>
          <option>Guerreiro</option>
          <option>Mago</option>
          <option>Arqueiro</option>
        </select>
        <button onClick={addMember}>Adicionar</button>
      </div>

      <ol className="party-list">
        {party.map(p => (
          <li key={p.id}>
            <strong>{p.name}</strong> — Lv {p.level} <span className="muted">({p.class})</span>
            <div className="inline-controls">
              <button className="small" onClick={()=>editLevel(p.id)}>Editar Lv</button>
              <button className="small danger" onClick={()=>removeMember(p.id)}>Remover</button>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

function Attributes({ attributes, setAttributes, attrPoints, setAttrPoints }) {
  function changeAttr(key, delta) {
    setAttributes(prev => {
      const next = { ...prev };
      const newVal = next[key] + delta;
      if (newVal < 0) return prev;
      if (delta > 0 && attrPoints <= 0) return prev;
      next[key] = newVal;
      return next;
    });

    if (delta > 0) setAttrPoints(p => p - 1);
    if (delta < 0) setAttrPoints(p => p + 1);
  }

  return (
    <div className="card">
      <h3>Sistema de Atributos</h3>
      <div className="muted">Pontos restantes: {attrPoints}</div>
      <div className="attr-grid">
        {Object.entries(attributes).map(([k,v]) => (
          <div key={k} className="attr-row">
            <div>
              <strong>{k}</strong>
              <div className="muted small">({k === "Força" ? "dano" : k === "Resistência" ? "vida" : k === "Inteligência" ? "mana" : "críticos"})</div>
            </div>
            <div className="attr-controls">
              <button onClick={()=>changeAttr(k, -1)}>-</button>
              <div className="attr-val">{v}</div>
              <button onClick={()=>changeAttr(k, +1)}>+</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CharacterPanel({ charName, setCharName, race, setRace, charClass, setCharClass, statusEffects, showEffects, setShowEffects }) {
  return (
    <div className="card">
      <h3>Painel do Personagem</h3>
      <div className="row">
        <input value={charName} onChange={(e)=>setCharName(e.target.value)} placeholder="Nome do personagem" />
        <select value={race} onChange={(e)=>setRace(e.target.value)}>
          <option>Humano</option>
          <option>Elfo</option>
          <option>Anão</option>
        </select>
        <select value={charClass} onChange={(e)=>setCharClass(e.target.value)}>
          <option>Guerreiro</option>
          <option>Mago</option>
          <option>Arqueiro</option>
        </select>
      </div>

      <h4 className="title-live">{charName ? charName.toUpperCase() : "SEU HERÓI"}</h4>

      <div className="row">
        <button onClick={()=>setShowEffects(prev=>!prev)}>{showEffects ? "Ocultar Efeitos" : "Mostrar Efeitos"}</button>
        <div className="muted">Raça: {race} • Classe: {charClass}</div>
      </div>

      {showEffects && (
        <div className="effects-box">
          <div>Ativos:</div>
          {statusEffects.length === 0 ? <div className="muted">Nenhum efeito</div> :
            statusEffects.map((s,i)=> <div key={i} className="effect">{s}</div>)
          }
        </div>
      )}
    </div>
  );
}

function Economy({ gold, setGold, setInventory }) {
  function earn() {
    setGold(prev => prev + 25);
  }
  function spend(amount) {
    if (gold < amount) return alert("Ouro insuficiente");
    setGold(prev => prev - amount);
  }

  function buy(item) {
    if (gold < item.price) return alert("Ouro insuficiente");
    setGold(prev => prev - item.price);
    setInventory(prev => [...prev, item.name]);
  }

  const shopItems = [
    { name: "Poção de Cura", price: 15 },
    { name: "Arco Longo", price: 60 },
    { name: "Pena de Feiticeiro", price: 30 },
  ];

  return (
    <div className="card">
      <h3>Sistema Econômico</h3>
      <div className="row">
        <div className="muted">Ouro: <strong>{gold} 🪙</strong></div>
        <div className="economy-actions">
          <button onClick={earn}>Ganhar ouro (+25 por missão)</button>
          <button onClick={()=>spend(15)} className="danger">Gastar 15 🪙</button>
        </div>
      </div>

      <div className="shop-grid">
        {shopItems.map((it, idx) => (
          <div key={idx} className="shop-item">
            <div>{it.name}</div><div>{it.price} 🪙</div>
            <button onClick={() => buy(it)}>Comprar</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function App() {

  const [hp, setHp] = useState(100);
  const [xp, setXp] = useState(0);
  const [level, setLevel] = useState(1);

  const [inventory, setInventory] = useState(["Espada", "Poção"]);
  const [backpackOpen, setBackpackOpen] = useState(false);

  const [quests, setQuests] = useState([]);
  const [completeCount, setCompleteCount] = useState(0);

  const [party, setParty] = useState([
    { id: 1, name: "Lina", level: 5, class: "Mago" },
    { id: 2, name: "Braun", level: 7, class: "Guerreiro" },
  ]);

  const [attributes, setAttributes] = useState({
    "Força": 3,
    "Resistência": 3,
    "Inteligência": 2,
    "Sorte": 2
  });
  const [attrPoints, setAttrPoints] = useState(10 - Object.values(attributes).reduce((a,b)=>a+b,0));

  const [charName, setCharName] = useState("");
  const [race, setRace] = useState("Humano");
  const [charClass, setCharClass] = useState("Guerreiro");
  const [statusEffects, setStatusEffects] = useState([]);
  const [showEffects, setShowEffects] = useState(false);

  const [gold, setGold] = useState(50);

  useEffect(() => {
    
  }, [attributes]);

  return (
    <div className="app">
      <header>
        <h1>RPG — Sistema de Personagem e Aventura</h1>
        <p className="muted">Gerencie herói, inventário, missões e party em tempo real.</p>
      </header>

      <main className="grid">
        <Combat hp={hp} setHp={setHp} />
        <XPSystem xp={xp} setXp={setXp} level={level} setLevel={setLevel} />

        <Inventory inventory={inventory} setInventory={setInventory} backpackOpen={backpackOpen} setBackpackOpen={setBackpackOpen} gold={gold} setGold={setGold} />

        <QuestLog quests={quests} setQuests={setQuests} completeCount={completeCount} setCompleteCount={setCompleteCount} gold={gold} setGold={setGold} setXp={setXp} />

        <EnchantGenerator />

        <PartyRanking party={party} setParty={setParty} />

        <Attributes attributes={attributes} setAttributes={setAttributes} attrPoints={attrPoints} setAttrPoints={setAttrPoints} />

        <CharacterPanel charName={charName} setCharName={setCharName} race={race} setRace={setRace} charClass={charClass} setCharClass={setCharClass} statusEffects={statusEffects} showEffects={showEffects} setShowEffects={setShowEffects} />

        <Economy gold={gold} setGold={setGold} setInventory={setInventory} />
      </main>

      <footer className="muted">
        Cauã's RPG 
      </footer>
    </div>
  );
}
