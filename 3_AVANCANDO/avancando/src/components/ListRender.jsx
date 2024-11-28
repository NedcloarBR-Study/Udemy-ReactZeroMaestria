import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Miguel", "Emanuel", "Joãozinho"]);

  return (
    <div>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListRender;