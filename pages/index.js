import { useState } from "react";

function Home() {
  return (
    <div>
      <h1>Seja bem vindo, Next.js!</h1>

      <Contador />
    </div>
  );
}

function Contador() {
  const [contador, setContador] = useState(0);
  function adicionarContador() {
    setContador(contador + 1);
  }
  return (
    <div>
      <p>{contador}</p>
      <button onClick={adicionarContador}>Adicionar</button>
    </div>
  );
}
export default Home;
