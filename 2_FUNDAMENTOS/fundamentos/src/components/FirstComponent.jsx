// Isso é um comentário

import MyComponent from "./MyComponent";

function FirstComponent() {
  // Isso é um comentário
  /*
    Isso é um comentário
    de Múltiplas linhas 
  */
  return (
    <div>
      {/* Isso é um comentário */}
      <h1>Meu primeiro componente</h1>
      <p className="teste">Meu texto</p>
      <MyComponent />
    </div>
  );
}

export default FirstComponent;
