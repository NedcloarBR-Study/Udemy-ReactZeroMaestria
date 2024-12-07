import { useContext } from "react";
import "./App.css";

import { CounterContext } from "./context/ConterContext";
import ChangeCounter from "./components/ChangeCounter";

function App() {
  const { counter } = useContext(CounterContext);
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
