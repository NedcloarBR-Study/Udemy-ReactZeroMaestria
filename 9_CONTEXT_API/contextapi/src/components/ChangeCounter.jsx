// 3 - alterando contexto

import { useContext } from "react";
import { CounterContext } from "../context/ConterContext";

const ChangeCounter = () => {
  const { counter, setCounter } = useContext(CounterContext);

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>Change Counter</button>
    </div>
  );
};

export default ChangeCounter;
