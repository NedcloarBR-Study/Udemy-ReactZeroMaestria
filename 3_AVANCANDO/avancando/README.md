# Aula 01

- Imagens no React
  - As `imagens públicas` do nosso projeto podem ficar na pasta public
  - De lá elas podem ser chamadas pelas tags img diretamente pelo `/nome.jpg`
  - Pois `a pasta public fica linkada com o src` das imagens

# Aula 02

- Imagens em asset
  - A pasta public pode ser utilizada para colocar imagens, como fizemos na aula passada
  - Mas um padrão bem utilizada para as imagens dos projetos `é colocar em uma pasta chamada assets`, em src
  - Ou seja, você vai encontrar projetos com as `duas abordagens`
  - Em assets `precisamos importar as imagens`, e o `src é dinâmico` com o nome de importação

# Aula 03

- Oque são hooks?
  - Recursos do react que tem `diversas funções`
  - Como: `guardar e alterar o estado de algum dado` na nossa aplicação
  - Todos os hooks começam com `use`, por exemplo: `useState`
  - Podemos criar os nossos hooks, isso é chamado de `custom hook`
  - Os hooks precisam ser `importados`
  - Geralmente são úteis em todas as aplicações, `utilizaremos diversos ao longo do curso`

# Aula 04

- useState hook
  - O hook `useState` é um dos mais utilizados
  - Utilizamos para `gerenciar o estado de algum dado`, variáveis não funcionam corretamente, o componente não re-renderiza
  - Para guardar o dado definimos o nome da variável e para alterar vamos utilizar `setNode`, onde nome é o nome do nosso dado

# Aula 05

- Renderização de lista
  - Uma outra ação bem comum é `renderizar listas` de dados no template
  - Fazemos isso com os dados com tipo de `array`
  - Utilizando o `método map` para nos auxiliar
  - Além dos dados podemos `inserir JSX` em cada iteração

# Aula 06

- A propriedade key
  - Iterar listas sem a `propriedade key` nos gera um warning, podemos verificar isso no console
  - `O React precisa de uma chave única` em cada um dos itens iterados
  - Isso serve para `ajudá-lo na renderização do componente`
  - Geralmente teremos um `array de objetos` e podemos colocar key como alguma chave única, como o `id` de algum dado
  - Em `último caso` devemos utilizar o index do método map
