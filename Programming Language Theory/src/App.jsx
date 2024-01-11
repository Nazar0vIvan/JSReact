import { useState } from "react";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import ReactPage from "./pages/ReactPage/ReactPage";
import CppPage from "./pages/CppPage/CppPage";
import JavaScriptPage from "./pages/JavaScriptPage/JavaScriptPage";

import LogoReact from "./assets/logo-react.png";
import LogoJS from "./assets/logo-js.png";
import LogoCpp from "./assets/logo-cpp.png";

import "./App.css";

function App() {
  const cardsData = [
    {
      id: 0,
      title: "React",
      desc: "Library for web and native user interfaces",
      icon: LogoReact,
    },
    {
      id: 1,
      title: "JavaScript",
      desc: "Scripting language to implement complex features on web pages",
      icon: LogoJS,
    },
    {
      id: 2,
      title: "C++",
      desc: "Generic language designed to humiliate generic people",
      icon: LogoCpp,
    },
  ];

  return (
    <>
      <div className="app">
        <CardsLayout data={cardsData} />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/react" element={<ReactPage />} />
        <Route path="/javascript" element={<JavaScriptPage />} />
        <Route path="/cpp" element={<CppPage />} />
      </Routes>
    </>
  );
}

export default App;
