// import { useContext } from "react";
import "./App.css";

// import { CounterContext } from "./context/ConterContext";
import ChangeCounter from "./components/ChangeCounter";

// 4 - context com hooks
import { useCounterContext } from "./hooks/useCounterContext";

// 5 - context mais complexo
import { useTitleColorContext } from "./hooks/useTitleColorContext";

function App() {
  // const { counter } = useContext(CounterContext);
  const { counter } = useCounterContext();

  // 5 - context mais complexo
  const { color, dispatch } = useTitleColorContext();

  // 6 - alterando contexto complexo
  const setTitleColor = (color) => {
    dispatch({ type: color });
  };

  return (
    <>
      <h1 style={{ color: color }}>Home</h1>
      <p>Valor do contexto: {counter}</p>
      {/* 3 - Alterando valor do contexto */}
      <ChangeCounter />
      {/* 6 - Alterando contexto complexo */}
      <div>
        <button onClick={() => setTitleColor("RED")}>Vermelho</button>
        <button onClick={() => setTitleColor("BLUE")}>Azul</button>
        <button onClick={() => setTitleColor("GREEN")}>Verde</button>
      </div>
    </>
  );
}

export default App;
