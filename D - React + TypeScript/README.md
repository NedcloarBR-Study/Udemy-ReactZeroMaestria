# Aula 01

- React com TS
  - Adicionar `TypeScript ao React` nos då mais possibilidades
  - Seguindo a mesma linha de que em JS, `temos uma forma mais padronizada` para programar
  - Como `tipos para componentes` ou mapeamento de `props por meio de interface`
  - Isso dá mais `confiabilidade` ao projeto e está sendo cada vez mais utilizado hoje em dia

# Aula 02

- Instalando React com TS
  - Para instalar o `TS junto do React` é simples
  - Vamos começar com `create-react-app` e adicionar a flag `—template` com o valor de typescript
  - `Um novo projeto é criado`, agora com arquivos `.tsx`
  - Podemos inicializá-lo normalmente

# Aula 03

- Estrutura de React com TS
  - A estrutura de React quando adicionamos TS `não muda muito`
  - Temos as pastas clássicas como: `node_modules`, `src` e `public`
  - Em src que as coisas ficam diferentes, temos a criação de `arquivos .tsx`
  - `Que säo arquivos jsx` porém com a possibilidade de aplicação das funcionalidades de TS
  - Podemos executar o projeto com `npm run start`

# Aula 04

- Criação de variáveis em componentes
  - Podemos `criar variáveis` dentro dos componentes
  - E elas podem receber os tipos que já vimos até este momento do curso
  - Isso nos permite `trabalhar com JSX` com apoio destas variáveis e seus tipos

# Aula 05 

- Criação de funções em componentes
  - Podemos também criar `funções em componentes`
  - Estas funções recebem `parâmetros`, que `podem ser tipados`
  - E o seu retorno também
  - Ou seja, podemos aplicar os mesmos conceitos que jå vimos de TS

# Aula 07

- Importando componentes
  - A importação de componente `funciona da mesma forma que sem TypeScript`
  - Porém temos que nos atentar aos `valores e tipos das props` de cada componente
  - O TS interage de forma mais sucinta na parte da importação

# Aula 08

- Destructuring nas props
  - O `destructuring` é um recurso de ES6, que `permite separar um array ou objeto` em varias variáveis
  - Aplicamos esta técnica nas `props`, para näo precisa repetir o nome do objeto sempre
  - Podemos fazer desta maneira em TS também

# Aula 09

- O hook useState
  - O `useState` é um hook muito utilizado em React
  - Serve para `consultar e alterar o estado` de algum dado
  - `Atrelamos uma função set a um evento`, como mudança de dado em input e alteramos o valor da variável base
  - Podemos adaptar este recurso para TS também

# Aula 10

- Enum
  - O `Enum` é uma forma interessante de formatar um objeto com chaves e valores
  - Onde podemos `utilizar como props`
  - Passando a chave pela prop, imprimimos o valor dela no componente

# Aula 11

- Types
  - Além das interfaces, podemos criar estruturas de tipos com o type
  - Isso nos permite criar dados com `tipos de dados fixos`
  - Ou até tipos customizados, como quando utilizamos o `operador |`

# Aula 12

- Context API
  - A `Context API`, é uma forma de transmitir dados entre componentes no React
  - A ideia principal é que podemos `determinar quais componentes recebem estes dados`
  - Ou seja, fazem parte do contexto
  - Podemos aplicar TS a esta funcionalidade também

- Utilizando o dado de contexto
  - Para utilizar os dados do contexto vamos precisar de um `hook`
  - Que é o `useContext`
  - A partir dele conseguimos `extrair os dados` e utilizar em um componente
