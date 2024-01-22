import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import CardsLayout from "./components/cardslayout/CardsLayout";
import Content from "./components/content/Content";
import TestComponent from "./components/testcomponent/TestComponent";
import CardsData from "../public/cards-data.js";
import Handler from "./components/Handler/Handler.jsx";
import "./App.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Sidebar />}
    >
      <Route
        index
        element={<CardsLayout data={CardsData} />}
      />
      <Route
        path="/react"
        element={<TestComponent />}
      />
    </Route>
  )
);

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
      <Handler />
      <Content />
    </div>
  );
}

export default App;
