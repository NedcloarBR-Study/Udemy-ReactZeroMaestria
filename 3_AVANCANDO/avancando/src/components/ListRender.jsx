import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Miguel", "Emanuel", "Joãozinho"]);

  const [users, setUsers] = useState([
    { id: 1, name: "Miguel", age: 20 },
    { id: 2, name: "Emanuel", age: 14 },
    { id: 3, name: "Joãozinho", age: 30 },
  ])

  const deleteRandom = () => {
    const randomIndex = Math.floor(Math.random() * 4)
    setUsers((prevUsers) => {
      console.log(prevUsers)
      return prevUsers.filter((user) => {
        return randomIndex !== user.id
      })
    })
  }


  return (
    <div>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name} - {user.age}</li>
        ))}
      </ul>
      <button onClick={deleteRandom}>Deletar um usuário aleatório</button>
    </div>
  );
}

export default ListRender;