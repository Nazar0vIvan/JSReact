import { useState } from "react";

function slowGetter() {
  return "Kyle";
}

function App() {
  const [name, setName] = useState(slowGetter());

  function handleClick() {
    setName("Sally");
  }

  return <h1 onClick={handleClick}>Hi {name}</h1>;
}

export default App;
