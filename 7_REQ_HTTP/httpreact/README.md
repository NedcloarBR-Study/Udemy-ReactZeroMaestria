# Aula 01

- JSON server
  - O `JSON server` é um pacote npm
  - Ele `simula uma API`, e isso nos possibilita fazer requisições HTTP
  - Vamos aprender a `integrar este recurso com o React`
  - Podemos entender isso como uma etapa de preparação para APIs reais
  - Ou seja, atingir o mesmo resultado mas sem precisar de uma estrutura no back-end

# Aula 02

- A importância do useEffect
  - O `useEffect` faz com que determinada ação seja executada apenas uma vez
  - Isso é interessante pois os componentes estão sempre se re-renderizando, então precisamos ter `ações únicas` às vezes
  - O useEffect ainda possui um `array de dependências`, que deve conter os dados que ativem a execução da função de forma automática
  - O useEffect estará presente sempre nas `requisições assíncronas`

# Aula 03

- Resgatando dados com React
  - Para trazer os dados vamos ter que utilizar vários recursos
  - Primeiramente ter um local para salvá-los (`useState`)
  - Renderizar a chamada a API apenas uma vez (`useEffect`)
  - Um meio de fazer a requisição assíncrona (`Fetch API`)
