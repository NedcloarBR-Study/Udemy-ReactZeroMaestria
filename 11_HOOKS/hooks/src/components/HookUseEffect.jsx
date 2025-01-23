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
