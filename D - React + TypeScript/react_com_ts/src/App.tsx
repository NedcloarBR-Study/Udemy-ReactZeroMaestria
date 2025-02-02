import React from 'react';
import './App.css';

// 4 - importação de componentes
import FirstComponent from './components/FirstComponent';

// 5 - desestruturando props
import SecondComponent from './components/SecondComponent';
import Destructuring from './components/Destructuring';

// 6 - useState
import State from './components/State';

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
      <SecondComponent name="Segundo" />
      <Destructuring
        title="Título"
        content="Conteúdo"
        commentsQty={10}
        tags={['tag1', 'tag2', 'tag3']}
      />
      <State />
    </div>
  );
}

export default App;