import { useState } from "react";
import TodoItem from "./TodoItem";

import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodoContent, setNewTodoContent] = useState("");

  function addNewTodo() {
    if (newTodoContent === "") return;
    setTodos((currentTodos) => {
      const newTodo = {
        id: crypto.randomUUID(),
        content: newTodoContent,
        isCompleted: false,
      };
      return [...currentTodos, newTodo];
    });
  }

  function toggleTodo(id, isCompleted) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) return { ...todo, isCompleted };
        return todo;
      });
    });
  }

  function deleteTodo(todoId) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== todoId);
    });
  }

  return (
    <>
      <ul id="list">
        {todos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              {...todo}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          );
        })}
      </ul>
      <div id="new-todo-form">
        <label htmlFor="todo-input">New Todo</label>
        <input
          type="text"
          id="todo-input"
          value={newTodoContent}
          onChange={(e) => setNewTodoContent(e.target.value)}
        />
        <button onClick={addNewTodo}>Add Todo</button>
      </div>
    </>
  );
}

export default App;
