import React, { ReactElement } from "react";

interface Props {
  title: string
  content: string
  commentsQty: number
  tags: string[]
  // 8 - enum
  category: Category
}

export enum Category {
  JS = "JavaScript",
  TS = "TypeScript",
  P = "Python",
}

function Destructuring({ title, content, commentsQty, tags, category }: Props): ReactElement {

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
      <div>Categoria: {category}</div>
    </div>
  );
}

export default Destructuring;