import React from 'react';
import './App.css';

// 4 - importação de componentes
import FirstComponent from './components/FirstComponent';

function App() {
  // 1 - variáveis
  const nome: string = 'Matheus';
  const age: number = 30;
  const isWorking: boolean = true;

  // 2 - funções

  const userGreeting = (name: string): string => {
    return `Olá, ${name}!`;
  }

  return (
    <div className="App">
      <h1>TypeScript com React</h1>
      <h2>Nome: {nome}</h2>
      <h2>Idade: {age}</h2>
      {isWorking && <p>Trabalhando</p>}
      <h3>{userGreeting(nome)}</h3>
      <FirstComponent />
    </div>
  );
}

export default App;