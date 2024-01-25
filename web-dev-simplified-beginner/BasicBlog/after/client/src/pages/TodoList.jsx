import { useLoaderData } from "react-router-dom";
import { getTodos } from "../api/todos";

function TodoList() {
  const todos = useLoaderData();
  return (
    <>
      <h1 className="page-title">Todos</h1>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={todo.completed ? "strike-through" : undefined}
          >
            {todo.title}
          </li>
        ))}
      </ul>
    </>
  );
}

async function loader({ request: { signal } }) {
  return getTodos({ signal });
}

export const todoListRoute = {
  loader,
  element: <TodoList />,
};
