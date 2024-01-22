import { useState } from "react";
import "./App.css";

const INITIAL_VALUE = ["A", "B", "C"];

function App() {
  const [array, setArray] = useState(INITIAL_VALUE);
  const [value, setValue] = useState("");

  function removeFirstElement() {
    setArray((currentArray) => {
      return currentArray.slice(1);
    });
  }

  function removeSpecificElement(specificElement) {
    setArray((currentArray) => {
      return currentArray.filter((element) => element !== specificElement);
    });
  }

  function addElementToStart(specificElement) {
    setArray((currentArray) => {
      return [specificElement, ...currentArray];
    });
  }

  function addElementToEnd(specificElement) {
    setArray((currentArray) => {
      return [...currentArray, specificElement];
    });
  }

  function clear() {
    setArray([]);
  }

  function reset() {
    setArray(INITIAL_VALUE);
  }

  function updateAToH() {
    setArray((currentArray) => {
      return currentArray.map((element) => {
        if (element === "A") return "H";
        return element;
      });
    });
  }

  function addElementAtIndex(element, index) {
    setArray((currentArray) => {
      return [...currentArray.slice(0, index), element, ...currentArray.slice(index)];
    });
  }

  return (
    <div class="app">
      <button onClick={removeFirstElement}>Remove First Element</button>
      <br />
      <button onClick={() => removeSpecificElement("B")}>Remove All B's</button>
      <br />
      <button onClick={() => addElementToStart("A")}>Add To Start</button>
      <br />
      <button onClick={() => addElementToEnd("Z")}>Add To End</button>
      <br />
      <button onClick={clear}>Clear</button>
      <br />
      <button onClick={reset}>Reset</button>
      <br />
      <button onClick={updateAToH}>Change A's To H's</button>
      <br />
      <button onClick={() => addElementAtIndex("C", 2)}>Add C At 2</button>
      <br />
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <br />
      <button onClick={() => addElementToStart(value)}>
        Add Value To Array
      </button>
      <br />
      {array.join(", ")}
    </div>
  );
}

export default App;
