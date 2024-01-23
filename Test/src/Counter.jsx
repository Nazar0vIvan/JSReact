import { useState } from "react";

function Counter({ initialCount = 0 }) {
  const [count, setCount] = useState(initialCount);

  return (
    <>
      <button onClick={() => setCount((c) => c - 1)}>-</button>
      {count}
      <button onClick={() => setCount((c) => c + 1)}>+</button>
    </>
  );
}

export default Counter;
