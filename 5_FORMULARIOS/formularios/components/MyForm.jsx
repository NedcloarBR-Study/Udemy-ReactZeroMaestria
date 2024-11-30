import { useState } from "react";
import "./MyForm.css";

const MyForm = () => {
  // 3 - Gerenciamento de dados
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  const handleName = (e) => {
    setName(e.target.value);
  }

  return (
    <div>
      {/* 1 - Criação de Form */}
      <form>
        <div>
          <label htmlFor="name">Nome:</label>
          <input type="text" name="name" placeholder="Digite o seu nome" onChange={handleName} />
        </div>
        {/* 2 - label envolvendo input */}
        <label>
          <span>E-mail</span>
          <input type="email" name="email" placeholder="Digite o seu e-mail" />
        </label>
          <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default MyForm;
