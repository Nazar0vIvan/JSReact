import { useState } from "react";

function App() {
  const [name, setName] = useState("Kyle");
  const [age, setAge] = useState(27);

  function handleClick() {
    setName("Sally");
    setAge(age + 1);
  }

  return (
    <h1 onClick={handleClick}>
      Hi {name} {age}
    </h1>
  );
}

export default App;
