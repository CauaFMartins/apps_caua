import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [dados, setDados] = useState({
    nome: '',
    email: '',
    idade: 0
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDados({ ...dados, [name]: value });
  };

  const vIdade = dados.idade >= 18 ? 'Idade válida' : 'Idade inválida, tenha no mínimo 18 anos';
  const vEmail = dados.email.includes('@') ? 'Email válido' : 'Endereço de Email inválido';

  return (
    <div>
      <h2>Formulário</h2>

      <form>

        <div>
          <label>Nome:</label>
          <input type="text" name="nome" value={dados.nome} onChange={handleChange} />
        </div>

        <div>
          <label>Email:</label>
          <input type="text" name="email" value={dados.email} onChange={handleChange} />
        </div>

        <div>
          <label>Idade:</label>
          <input type="number" name="idade" value={dados.idade} onChange={handleChange} />
        </div>

      </form>

      <div>
        <h2>Dados Preenchidos</h2>
        <p><strong>Nome: </strong>{dados.nome}</p>
        <p><strong>Email: </strong>{dados.email} — {vEmail}</p>
        <p><strong>Idade: </strong>{dados.idade} — {vIdade}</p>
      </div>
    </div>
  )
}

export default App;
