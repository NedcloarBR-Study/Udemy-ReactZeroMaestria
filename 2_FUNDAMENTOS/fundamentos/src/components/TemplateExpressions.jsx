import MyComponent from "./MyComponent";

function TemplateExpressions() {

  const name = 'Miguel';
  const data = {
    age: 19,
    job: 'Developer',
  }

  return (
    <div>
      <h1>Olá {name}, tudo bem?</h1>
      <p>Idade: {data.age}</p>
      <p>Profissão: {data.job}</p>
      <p>{2 + 2}</p>
      <p>{console.log("JSX React")}</p>
      <MyComponent />
    </div>
  )
}

export default TemplateExpressions; 