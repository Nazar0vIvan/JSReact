import { Navigate, createBrowserRouter } from "react-router-dom";
import UserList from "./pages/UserList";
import TodoList from "./pages/TodoList";
import RootLayout from "./layouts/RootLayout";
import { postListRoute } from "./pages/PostList";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Navigate to="/posts" /> },
      {
        path: "posts",
        children: [
          { index: true, ...postListRoute },
          { path: ":postId", element: <h1>Hi</h1> },
        ],
      },
      { path: "users", element: <UserList /> },
      { path: "todos", element: <TodoList /> },
    ],
  },
]);
