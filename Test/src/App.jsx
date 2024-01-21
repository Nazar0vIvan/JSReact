import React, { useState } from "react";

function App() {
  // const [name, setName] = useState("");
  //const [isDarkMode, setIsDarkMode] = useState(false);
  const nameInput = useInputValue("");
  const [isDarkMode, toggleDarkMode] = useToggle(false);

  return (
    <div
      style={{
        background: isDarkMode ? "#333" : "white",
        color: isDarkMode ? "white" : "#333",
      }}
    >
      <label>
        Name:
        <input {...nameInput} />
      </label>
      <br />
      <br />
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
    </div>
  );
}

function useToggle(initialValue) {
  const [value, setValue] = useState(initialValue);

  function toggle() {
    setValue((currentValue) => !currentValue);
  }

  return [value, toggle];
}

function useInputValue(initialValue) {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    onChange: (e) => setValue(e.target.value),
  };
}

export default App;
