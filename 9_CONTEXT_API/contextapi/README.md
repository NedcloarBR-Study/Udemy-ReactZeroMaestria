# Aula 01

- O que é Context API?
  - Um recurso que facilita o `compartilhamento de um estado entre componentes`
  - Ou seja, quando precisamos de `dados ‘globais’`, provavelmente precisamos utilizar o Context
  - `O Context precisa encapsular os componentes` que receberão seus valores, geralmente colocamos no App.js ou index.js
  - Os contextos geralmente ficam na `pasta context`

# Aula 02

- Criando o contexto
  - Primeiramente vamos ter que `criar o Context`
  - O arquivo deve sempre ter a `primeira letra maiúscula` no nome, e geralmente termina em Context: SomeContext.js
  - A convenção é deixar na `pasta context` em src
  - Onde vamos utilizar o valor do contexto, `o arquivo precisa ser importado`

# Aula 03

- Criando o provider
  - O Provider vai `delimitar onde o contexto é utilizado`
  - Vamos criar uma espécie de componente com a `prop children`
  - E este Provider deve `encapsular os demais componentes` em que precisamos consultar ou alterar o valor
  - Geralmente ele fica em `App.js` ou em `index.js`
  - Agora poderemos `compartilhar o valor do contexto` em todos os componentes
