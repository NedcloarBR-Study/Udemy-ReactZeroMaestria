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
  - Para criar a `API` teremos uma tarefa simples, comparada a estrutura com Handlebars;
  - Basta instalar o Express, ele fará tudo sozinho neste ponto;
  - Depois `criaremos uma rota que responde em JSON`, este é o dado de comunicação entre aplicação e API;
  - É importante definir o `verbo correto`, como `GET` ou `POST`, por ex;