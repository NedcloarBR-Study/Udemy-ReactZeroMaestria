import { useState } from "react";
import "./MyForm.css";

const MyForm = ({ user }) => {
  // 6 - Controlled Input
  // 3 - Gerenciamento de dados
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");

  const handleName = (e) => {
    setName(e.target.value);
  }

  // console.log(name);
  // console.log(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enviando Formulário");
    console.log(name, email);
  }

  return (
    <div>
      {/* 5 - envio de form */}
      {/* 1 - Criação de Form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input type="text" name="name" placeholder="Digite o seu nome" onChange={handleName} value={name} />
        </div>
        {/* 2 - label envolvendo input */}
        <label>
          <span>E-mail</span>
          {/* 4 - Simplificação do state handle */}
          <input type="email" name="email" placeholder="Digite o seu e-mail" onChange={(e) => setEmail(e.target.name)} value={email}/>
        </label>
          <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default MyForm;
