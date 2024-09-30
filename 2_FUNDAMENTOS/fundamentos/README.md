# Aula 1

- Criando Components
  - Na maioria dos projetos os componentes ficam em uma pasta chamada `components`, que devemos criar
  - Geralmente são nomeados com a `camel case`: FirstComponent.jsx
  - No arquivo `criamos uma função`, que contém o código deste componente (a lógica e o template)
  - E também precisamos `exportar essa função`, para reutilizá-lo

# Aula 2

- Importando Componente
  - A importação é a maneira que temos de `reutilizar o componente`
  - Utilizamos a sintaxe: `import X from "./components/X"` onde X é o nome do componente
  - Para colocar o componente importado em outro componente precisamos colocá-lo em forma de tag: `<X />`
  - E então finalizamos o ciclo de importação

# Aula 3

- JSX
  - `JSX` é o HTML do React
  - Onde vamos declarar as tags de HTML que serão exibidas no navegador
  - Ficam no `return` do componente
  - Temos algumas diferenças do HTML, por exemplo: class será `className`
  - Isso se dá pelas `instruções semelhantes de JS e HTML` pois JSX é JavaScript, então algumas terão nomes diferentes
  - O JSX pode ter apenas `um elemento pai`

# Aula 4

- Comentários no componente
  - Podemos inserir comentários de `duas maneiras` no componente
  - Na parte da função, onde é executada a lógica a sintaxe é: `// Algum comentário`
  - E também no JSX: `{/* Algum comentário */}`
  - As chaves nos permitem `executar sentenças em JavaScript`, veremos isso mais adiante

# Aula 5

- Template Expressions
  - `Template Expressions` é um recurso que nos permite executar JS no JSX e também `interpolar variáveis`
  - Isso será muito útil ao longo dos projetos em React
  - A sintaxe é: `{ algumCódigoEmJS}`
  - `Tudo que está entre chaves é processado em JavaScript` e nos retorna um resultado

# Aula 6

- Hierarquia de componentes
  - Os componentes que criamos `podem ser reutilizados em vários componentes`
  - E ainda componentes `podem formar uma hierarquia`, sendo importados uns dentro dos outros, como fizemos em App

# Aula 7

- Evento de click
  - Os eventos para o front-end são `essenciais`
  - Em várias situações vamos precisar do click, como ao `enviar formulários`
  - No React os eventos já estão "prontos", podemos utilizar `onClick` para ativar uma função ao clicar em um elemento
  - Essa função é criada na própria função do componente
  - As funções geralmente tem o padrão `handleAlgumaCoisa`

# Aula 8

- Funções no evento
  - Quando as funções são simples, podemos `realizar a lógica no próprio evento`
  - Isso `torna nosso código mais "complicado"`, por atrelar lógica com HTML
  - Mas em `algumas situações` é aplicável

# Aula 9

- Funções de renderização
  - Podemos criar `funções que retornam JSX`
  - Isso serve para criar situações que `dependam de outras condições`
  - Ou seja, o JSX a ser renderizado pode variar por alguma variável, por exemplo