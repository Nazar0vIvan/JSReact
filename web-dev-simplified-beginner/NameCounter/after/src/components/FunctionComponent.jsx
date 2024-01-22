import React from "react";
import { useState } from "react";

function FunctionComponent() {
  const [name, setName] = useState("Bob");
  const [age, setAge] = useState(0);

  function increaseAge() {
    setAge((age) => {
      return age + 1;
    });
  }

  function decreaseAge() {
    setAge((age) => {
      return age == 0 ? 0 : age - 1;
    });
  }

  return (
    <div
      style={{ display: "inline-flex", flexDirection: "column", gap: "10px" }}
    >
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <button onClick={decreaseAge}>-</button>
        {age}
        <button onClick={increaseAge}>+</button>
      </div>
      My name is {name} and I am {age} years old.
    </div>
  );
}

export default FunctionComponent;
