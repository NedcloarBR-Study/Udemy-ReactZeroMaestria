// import { useContext } from "react";
import "./App.css";

// import { CounterContext } from "./context/ConterContext";
import ChangeCounter from "./components/ChangeCounter";

// 4 - context com hooks
import { useCounterContext } from "./hooks/useCounterContext";

function App() {
  // const { counter } = useContext(CounterContext);
  const { counter } = useCounterContext();

  return (
    <>
      <h1>Home</h1>
      <p>Valor do contexto: {counter}</p>
      {/* 3 - Alterando valor do contexto */}
      <ChangeCounter />
    </>
  );
}

export default App;
