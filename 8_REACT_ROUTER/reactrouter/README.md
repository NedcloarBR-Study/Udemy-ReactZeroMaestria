# Aula 01

- O que é React Router?
  - `React Router` é um dos pacotes mais utilizados para criar uma estrutura de rotas em aplicações de React
  - Ou seja, permite que nossas `SPAs tenham múltiplas páginas`
  - Precisamos instalar no nosso projeto
  - A `configuração e utilização` é simples
  - Também temos outras funções como: `Redirect`, `Nested Routes`, `Not Found Routes` e outros

# Aula 02

- Configurando o React Router
  - Para configurar o React Router vamos ter que importar três elementos de `react-router-dom`
  - `BrowserRouter`: Define onde a área do nosso app que vai trocar as páginas
  - `Routes`: Define as rotas
  - `Route`: um elemento deste para cada rota, configurar com path e componente da rota

# Aula 03

- Adicionando links
  - Para criar links para as páginas vamos precisar utilizar o `Link` do React Router
  - No Link configuramos o parâmetro `to`, que recebe a `URL/path` que será redirecionado quem clicar no link

# Aula 04

- Carregando dados
  - Vamos exercitar novamente o carregamento de dados com nosso hook `useFetch`
  - Depois poderemos utilizá-los para o `carregamento de dados individuais`
  - Utilizaremos o hook igual ao da última seção e vamos imprimir os produtos na Home da mesma forma

# Aula 05

- Rota dinâmica
  - Para criar uma rota dinâmica vamos precisar definir uma `nova Route` em App.js
  - Que deve ter o padrão de: `/products/:id`
  - Onde `:id` é o dado dinâmico, ou seja, podemos ter qualquer valor
  - Na página podemos utilizar o hook `useParams` para resgatar esta informação

# Aula 06

- Carregando dado individual
  - Graças ao passo dado na aula passada o `carregamento individual` de um produto será fácil
  - Vamos utilizar o id recebido para `formar a nova URL`
  - E por fim podemos utilizar o hook `useFetch` para trazer o item
  - Por fim faremos a `validação e impressão` do mesmo no JS

# Aula 07

- Nested route
  - As nested routes indicam URLs mais complexas, como: `/products/:id/something`
  - Neste caso vamos precisar criar um componente que corresponda com o padrão indicado e também a URL em App.js
  - Na nested route `teremos o acesso ao parâmetro da URL` também

# Aula 08

- No match route (404)
  - Podemos criar uma `página 404` facilmente com o React Router
  - Basta `criarmos o componente` da página
  - E no arquivo App.js definir um `path como *`
  - Desta maneira, qualquer rota que não exista cairá neste componente

# Aula 09

- Link ativo
  - Para ter fácil acesso a uma modificação para os links ativos vamos trocar o Link pelo `NavLink`
  - Neste elemento temos acesso a um valor chamado `isActive`
  - Ou seja, podemos `ativar uma classe` se a rota atual for a que está no `atributo to`

# Aula 10

- Search Params
  - `Search Params` é um recurso que permite obter o que vem na URL em forma de parâmetro, ex: produtos?`q=camisa`
  - Utilizamos o hook `useSeachParams` para obtê-los
  - Com este recurso fica simples fazer uma `funcionalidade de busca` no sistema

# Aula 11

- Redirect
  - Podemos precisar de um `redirecionamento de páginas` eventualmente
  - `Exemplo:` uma página antiga do sistema responde agora a uma nova URL
  - Para isso vamos `criar a rota com Route` normalmente
  - Mas em element vamos utilizar o `componente Navigate` com um `to` que vai para a rota correta