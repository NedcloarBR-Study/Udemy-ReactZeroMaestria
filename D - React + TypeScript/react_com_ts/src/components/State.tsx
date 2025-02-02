import React, { ReactElement, useState, ChangeEvent } from "react";

function State(): ReactElement {
  const [text, setText] = useState<string | null>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  }

  return (
    <div>
      <p>O texto é {text}</p>
      <input type="text" onChange={handleChange} />
    </div>
  );
}

export default State;