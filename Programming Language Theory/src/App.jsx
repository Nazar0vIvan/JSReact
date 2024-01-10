import { useState } from "react";
import CardsLayout from "./components/cards-layout/CardsLayout";
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
    <div className="app">
      <CardsLayout data={cardsData} />
    </div>
  );
}

export default App;