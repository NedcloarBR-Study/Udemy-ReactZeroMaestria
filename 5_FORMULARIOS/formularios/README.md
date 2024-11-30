# Aula 01

- Formulários e React
  - No React vamos também utilizar a `tag form` para formulários
  - As labels dos inputs contém o atributo `htmlFor`, que deve ter o valor do name do input
  - `Não utilizamos action`, pois o processamento será feito de form assíncrona


# Aula 02

- Label envolvendo o input
  - Em React um padrão comum é a `tag label envolvendo o input`
  - Isso faz com que o atributo for se torne `opcional`
  - `Simplificando nossa estrutura de HTML`, sem perder a semântica

# Aula 03

- Manipulação de valores
  - Para manipular os valores dos inputs vamos utilizar  o `hook useState`
  - Ou seja, podemos armazenar na variável `e utilizar o set para alterar o valor`
  - Vamos criar uma função para alterar o valor no evento `onChange`
  - Deixando nosso código fácil de trabalhar nas próximas etapas: como envio dos dados para BD e validação

# Aula 04

- Simplificando a manipulação
  - Quando temos vários inputs podemos `realizar a manipulação de forma mais simples`
  - Basicamente criamos uma `função inline no onChange`
  - Ela vai `alterar o valor do state` com o método set, da mesma forma que a função isolada

# Aula 05

- Envio de formulário
  - Para enviar um form vamos utilizar o evento `onSubmit`
  - `Ele chamará uma função`, e nesta devemos lembrar de parar a submissão com o `preventDefault`
  - Nesta etapa podemos realizar validações, envio de form para o servidor, reset de form e outras ações

# Aula 06

- Controlled inputs
  - `Controlled inputs` é um recurso que nos permite mais flexibilidade nos forms de React
  - Precisamos apenas `igualar o valor ao state`
  - Um uso muito comum: formulários de edição, que os dados vem do back-end, conseguiremos preencher o input mais facilmente

# Aula 07

- Limpando formulários
  - Com o controller inputs limpar o form será `fácil`
  - Basta `atribuir um valor de uma string vazia aos states` e pronto!
  - Isso será feito após o envio, em formulários que o usuário precisa preencher novamente

