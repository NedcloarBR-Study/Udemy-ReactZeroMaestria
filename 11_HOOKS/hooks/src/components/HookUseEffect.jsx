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

  // 3 - item no array de dependências

  const [anotherNumber, setAnotherNumber] = useState(0);

  useEffect(() => {
    if (anotherNumber > 0) {
      console.log("Estou sendo executado quando anotherNumber é alterado");
    }
  }, [anotherNumber]);

  return (
    <div>
      {/* 1 - useEffect */}
      <h2>useEffect</h2>
      <p>Number: {number}</p>
      <button onClick={changeSomething}>Executar!</button>
      <p>Another Number: {anotherNumber}</p>
      <button onClick={() => setAnotherNumber(anotherNumber + 1)}>
        Alterar anotherNumber!
      </button>
      <hr />
    </div>
  );
};

export default HookUseEffect;
