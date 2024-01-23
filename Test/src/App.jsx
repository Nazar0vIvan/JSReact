import React, { useEffect, useState, createContext } from "react";
import Child from "./Child";

const ThemeContext = createContext();

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function toggleTheme() {
    setIsDarkMode((d) => !d);
  }

  useEffect(() => {
    document.body.style.background = isDarkMode ? "#333" : "white";
    document.body.style.color = isDarkMode ? "white" : "#333";
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value ={{isDarkMode, toggleTheme}}>
      <Child isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </ThemeContext.Provider>
  );
}

export default App;
