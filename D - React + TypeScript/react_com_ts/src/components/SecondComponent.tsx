import React, { ReactElement } from 'react';

interface Props {
  name: string;
}

function SecondComponent(props: Props): ReactElement {
  return (
    <div>
      <h1>Second Component</h1>
      <p>O nome dele é {props.name}</p>
    </div>
  );
}

export default SecondComponent;