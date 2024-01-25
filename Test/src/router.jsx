import { Outlet, createBrowserRouter, redirect } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Store from "./pages/Store";
import Navbar from "./Navbar";
import Team from "./pages/Team";
import TeamMember from "./pages/TeamMember";
import TeamNavbar from "./TeamNavbar";

export const router = createBrowserRouter([
  {
    element: <NavLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/store", element: <Store /> },
      {
        path: "/team",
        element: <TeamNavLayout />,
        loader:
          async () =>
          ({ request: { signal } }) => {
            return fetch("https://jsonplaceholder.typicode.com/users", {
              signal,
            });
          },
        children: [
          { index: true, element: <Team /> },
          {
            path: ":memberId",
            loader: async ({ params, request: { signal } }) => {
              return fetch(
                `https://jsonplaceholder.typicode.com/users/${params.memberId}`,
                { signal }
              ).then((res) => {
                if (res.status === 200) return res.json();
                throw redirect("/team");
              });
            },
            element: <TeamMember />,
          },
        ],
      },
    ],
  },
]);

function NavLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

function TeamNavLayout() {
  return (
    <>
      <TeamNavbar />
      <Outlet />
    </>
  );
}
