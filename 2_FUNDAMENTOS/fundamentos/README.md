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
