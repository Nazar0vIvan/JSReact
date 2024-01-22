import React from "react";

function TodoItem({ id, content, isCompleted, toggleTodo, deleteTodo }) {
  return (
    <li className="list-item">
      <label className="list-item-label">
        <input
          type="checkbox"
          checked={isCompleted}
          data-list-item-checkbox
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        <span data-list-item-text>{content}</span>
      </label>
      <button onClick={() => deleteTodo(id)} data-button-delete>
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
