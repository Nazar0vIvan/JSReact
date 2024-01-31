import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
  },
]);

/*
{
  errorElement: <ErrorPage />,
  children: [
    { index: true, element: <Navigate to="/posts" /> },
    {
      path: "posts",
      children: [
        { index: true, ...postListRoute },
        { path: ":postId", ...postRoute },
      ],
    },
    {
      path: "users",
      children: [
        { index: true, ...userListRoute },
        { path: ":userId", ...userRoute },
      ],
    },
    { path: "todos", ...todoListRoute },
    { path: "*", element: <h1>404 - Page Not Found</h1> },
  ],
},
*/
