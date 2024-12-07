import { useContext } from "react";
import "./App.css";

import { CounterContext } from "./context/ConterContext";

function App() {
  const { counter } = useContext(CounterContext);
  return (
    <>
      <h1>Home</h1>
      <p>Valor do contexto: {counter}</p>
    </>
  );
}

export default App;
