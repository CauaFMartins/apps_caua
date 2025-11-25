import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function BotaoCurtir() {
  const [likes, setLikes] = useState(0);

  const handleCurtir = () => {
    setLikes(likes + 1);
  };

  return (
    <div>
      <button onClick={handleCurtir}>👍 Curtir</button>
      <p>Likes: {likes}</p>
    </div>
  );
}

export default BotaoCurtir;
