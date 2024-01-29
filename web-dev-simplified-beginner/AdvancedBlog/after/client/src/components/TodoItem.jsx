import React from "react";

function TodoItem({ completed, title }) {
  return <li className={completed ? "strike-through" : undefined}>{title}</li>;
}

export default TodoItem;
