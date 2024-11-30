# Aula 01

- Formulários e React
  - No React vamos também utilizar a tag form para formulários
  - As labels dos inputs contém o atributo htmlFor, que deve ter o valor do name do input
  - Não utilizamos action, pois o processamento será feito de form assíncrona


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