import React, { ReactElement } from "react";

interface Props {
  title: string
  content: string
  commentsQty: number
  tags: string[]
}

function Destructuring({ title, content, commentsQty, tags }: Props): ReactElement {

  return (
    <div>
      <h1>{title}</h1>
      <p>{content}</p>
      <p>Quantidade de Comentários: {commentsQty}</p>
      <div>
        {tags.map((tag) => (
          <span>#{tag}</span>
        ))}
      </div>
    </div>
  );
}

export default Destructuring;