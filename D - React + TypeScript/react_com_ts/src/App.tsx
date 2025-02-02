import React from 'react';
import './App.css';

function App() {
  // 1 - variáveis
  const nome: string = 'Matheus';
  const age: number = 30;
  const isWorking: boolean = true;

  return (
    <div className="App">
      <h1>TypeScript com React</h1>
      <h2>Nome: {nome}</h2>
      <h2>Idade: {age}</h2>
      {isWorking && <p>Trabalhando</p>}
    </div>
  );
}

export default App;