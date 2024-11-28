import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Miguel", "Emanuel", "Joãozinho"]);

  const [users] = useState([
    { id: 1, name: "Miguel", age: 20 },
    { id: 2, name: "Emanuel", age: 14 },
    { id: 3, name: "Joãozinho", age: 30 },
  ])

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
    </div>
  );
}

export default ListRender;