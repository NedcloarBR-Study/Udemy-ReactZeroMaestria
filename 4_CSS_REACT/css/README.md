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