# Aula 01

- CSS global
  - O CSS global é utilizado para estilizar diversos elementos em comum ou fazer um reset no CSS
  - Utilizamos o arquivo index.css para isso
  - Ele está na pasta src

# Aula 02

- CSS de Componente
  - O CSS de componente é utilizado para um componente em específico
  - Geralmente é criado um arquivo com o mesmo nome do componente e este é importado no componente
  - Note que este método não é scoped, ou seja, o CSS vaza para outros componentes se houver uma regra em colisão
  - O React já cria um exemplo desta técnica com o App.css/js

# Aula 03

- Inline style
  - O inline style do React é igual o do CSS
  - Por meio do atributo style conseguimos aplicar regras diretamente em um elemento
  - Devemos optar por outras maneiras de CSS, o inline pode dificultar a manutenção ou deixar o código imprevisível em algumas situações

# Aula 04

- Inline style Dinâmico
  - O CSS dinâmico inline aplica estilo baseado em uma condicional
  - Vamos inserir no atributo um if ternário
  - Dependendo da condição podemos mudar que regras de estilo um elemento recebe

# Aula 05

- Classes dinâmicas no CSS
  - Podemos também aplicar lógica para mudar a classe de CSS de um elemento
  - Também utilizaremos o if ternário
  - Essa abordagem é mais interessante que o CSS inline
  - Pois as classes estarão isoladas no arquivo de CSS, resolvendo o problema de organização de código

# Aula 06

- CSS Modules
  - O CSS Modules é um recurso de CSS scoped
  - Ou seja, ele vai ser exclusivo do componente
  - O nome do arquivo é: Componente.module.css
  - Precisamos importá-lo também no componente
