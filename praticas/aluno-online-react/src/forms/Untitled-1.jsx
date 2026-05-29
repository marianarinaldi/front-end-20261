import React, { useState } from "react";

export default function Counter(props) {
  const [count, setCount] = useState(props.count);

  return (
    <>
      <p>Você clicou {props.count} vezes</p>
      <button onClick={() => useState(props.count + 1)}>Clique me</button>
    </>
  );
}
