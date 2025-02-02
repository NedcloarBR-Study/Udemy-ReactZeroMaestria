# Aula 01

- O que é uma API?
  - `API` é um acrônimo para Interface de Programação de Aplicações (Application Programming Interface)
  - Uma forma simples de `comunicação entre aplicações`
  - Não necessita de telas, respostas geralmente são em `JSON`
  - `Independente` de front-end, a API não possui ligação com o front
  - Baseadas em `requisição e resposta`
  - Podemos criar uma `API com Express`

# Aula 02

- O que é REST e RESTful?
  - `REST` significa Representational State Transfer ou Transferência Representacional de Estado
  - Um `estilo de arquitetura`, que define como as APIs devem ser criadas
  - Seguindo todos os padrões a API é considerada `RESTful`
  - Alguns dos pontos säo: respostas uniformes, sem ligação de estado,cache de respostas e outros

# Aula 03

- O que é uma SPA?
  - `SPA` significa Single Page Application
  - É quando a aplicação possui um `front-end separado do back-end`
  - Ou seja, uma `API` para o back-end
  - E um framework `front-end JS`, como: React, Vue ou Angular
  - Aplicações deste tipo estão `dominando o mercado`
  - E as sessões seguintes tem como objetivo trabalhar `focadas em SPA`
  - A arquitetura anteriormente utilizada é conhecida como `Monolith`

# Aula 04

- Verbos HTTP
  - Os `verbos HTTP` andam de mãos dadas com as APIs, e fazem parte do `REST`
  - Temos métodos como: `GET`, `POST`, `PUT`, `DELETE`, `PATCH` e etc
  - Cada um `representa uma ação na API`, ou seja, säo essenciais
  - É muito importante que as nossas funcionalidades usem os `métodos corretos`
  - Enviamos o método `através da requisição`

# Aula 05

- Criando uma API com Express
  - Para criar a `API` teremos uma tarefa simples, comparada a estrutura com Handlebars
  - Basta instalar o Express, ele fará tudo sozinho neste ponto
  - Depois `criaremos uma rota que responde em JSON`, este é o dado de comunicação entre aplicação e API
  - É importante definir o `verbo correto`, como `GET` ou `POST`, por ex

# Aula 06

- Conhecendo o Postman
  - O `Postman` é um client para testes de API
  - Podemos então `criar o back-end antes ou separado do front` só com a ajuda deste software
  - Como você deve imaginar, é `fundamental` quando estamos criando APIs
  - Podemos `simular verbos`, `corpo de requisição`, inserir `headers`, tudo que é possível com uma aplicação web

# Aula 07

- Testando rota com Postman
  - Para acessar uma rota com o Postman precisamos `configurar o client`
  - Devemos `inserir o verbo correto` para a rota
  - E também `configurar o endpoint`, que é a `URL` onde nossa rota foi
  - estabelecida
  - Enviando a requisição, `receberemos a resposta`

# Aula 08

- Criando uma rota de POST
  - Para criar a rota de POST vamos utilizar o `método post` do Express
  - Podemos extrair os dados da requisição, acessando `req.body`
  - Da mesma maneira que no get, podemos `retornar uma resposta como JSON` pela API

# Aula 09

- Adicionando status na resposta
  - Os status podem `ajudar no desenvolvimento da nossa aplicação`
  - `Exibindo mensagens de sucesso ou erro`, por exemplo
  - Precisamos entre res e o método json definir um `número de status HTTP`
  - Isso é feito por meio do `método status`

# Aula 10

- A realidade sobre as APIs...
  - A API `é desenvolvida de forma muito semelhante` a quando criamos projetos com Handlebars, por exemplo
  - Temos algumas alterações leves, como: `resposta apenas por JSON`
  - Mas isso acaba até `simplificando as coisas`, separando as responsabilidades