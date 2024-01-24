import { Outlet, createBrowserRouter } from "react-router-dom";
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
        children: [
          { index: true, element: <Team /> },
          { path: ":memberId", element: <TeamMember /> },
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
