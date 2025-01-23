import { useEffect, useState } from "react";

const HookUseEffect = () => {
  // 1 - useEffect, sem dependências
  useEffect(() => {
    console.log("Estou sendo executado");
  });

  const [number, setNumber] = useState(0);

  const changeSomething = () => {
    setNumber(number + 1);
  };

  // 2 - array de dependências vazio

  useEffect(() => {
    console.log("Estou sendo executado apenas 1 vez");
  }, []);

  return (
    <div>
      {/* 1 - useEffect */}
      <h2>useEffect</h2>
      <p>Number: {number}</p>
      <button onClick={changeSomething}>Executar!</button>
      <hr />
    </div>
  );
};

export default HookUseEffect;
