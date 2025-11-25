import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function CriadorAvatar() {
  const opcoesCabelo = {
    loiro: "🧑‍🦳 Loiro",
    castanho: "🧑‍🟫 Castanho",
    preto: "🧑‍🦱 Preto",
    ruivo: "🧑‍🦰 Ruivo",
  };

  const opcoesOlhos = {
    azuis: "🧿 Azuis",
    verdes: "👁️‍🗨️ Cinzas",
    castanhos: "👁️ Castanhos",
  };

  const opcoesAcessorios = {
    oculos: "👓 Óculos",
    chapeu: "🎩 Chapéu",
    brinco: "🟡 Brinco",
  };

  const [avatar, setAvatar] = useState({
    cabelo: "",
    olhos: "",
    acessorios: [],
  });

  const handleCabeloChange = (e) => {
    setAvatar({ ...avatar, cabelo: e.target.value });
  };

  const handleOlhosChange = (e) => {
    setAvatar({ ...avatar, olhos: e.target.value });
  };

  const handleAcessoriosChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setAvatar({
        ...avatar,
        acessorios: [...avatar.acessorios, value],
      });
    } else {
      setAvatar({
        ...avatar,
        acessorios: avatar.acessorios.filter((item) => item !== value),
      });
    }
  };

  const getEmojiAvatar = () => {
    const cabeloEmoji = avatar.cabelo ? opcoesCabelo[avatar.cabelo].split(" ")[0] : "🧑";
    return cabeloEmoji;
  };

  return (
    <div style={{ padding: "20px", fontSize: "18px" }}>
      <h2>Criador de Avatar</h2>

      <label>Cabelo:</label>
      <select name="cabelo" onChange={handleCabeloChange}>
        <option value="">Selecione</option>
        {Object.keys(opcoesCabelo).map((opc) => (
          <option key={opc} value={opc}>
            {opcoesCabelo[opc]}
          </option>
        ))}
      </select>

      <br /><br />

      <label>Olhos:</label><br />
      {Object.keys(opcoesOlhos).map((opc) => (
        <label key={opc}>
          <input
            type="radio"
            name="olhos"
            value={opc}
            onChange={handleOlhosChange}
          />
          {opcoesOlhos[opc]}
        </label>
      ))}

      <br /><br />

      <label>Acessórios:</label><br />
      {Object.keys(opcoesAcessorios).map((opc) => (
        <label key={opc}>
          <input
            type="checkbox"
            name="acessorios"
            value={opc}
            onChange={handleAcessoriosChange}
          />
          {opcoesAcessorios[opc]}
        </label>
      ))}

      <hr />

      <h3>Avatar Montado em Tempo Real</h3>

      <p style={{ fontSize: "32px" }}>{getEmojiAvatar()}</p>

      <strong>Cabelo:</strong> {avatar.cabelo ? opcoesCabelo[avatar.cabelo].split(" ")[1] : "Nenhum"} <br />
      <strong>Olhos:</strong> {avatar.olhos ? opcoesOlhos[avatar.olhos].split(" ")[1] : "Nenhum"} <br />
      <strong>Acessórios:</strong>{" "}
      {avatar.acessorios.length > 0
        ? avatar.acessorios
            .map((acc) => opcoesAcessorios[acc].split(" ")[1])
            .join(", ")
        : "Nenhum"}
    </div>
  );
}

export default CriadorAvatar;
