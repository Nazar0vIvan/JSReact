import { useState } from "react";
import CardsLayout from "./src/components/cards-layout/CardsLayout";
import LogoReact from "./src/assets/logo-react.png";
import LogoJS from "./src/assets/logo-js.png";
import LogoCpp from "./src/assets/logo-cpp.png";
import "./App.css";

function App() {
  const cardsData = [
    {
      title: "React",
      desc: "The library for web and native user interfaces",
      icon: LogoReact,
    },
    {
      title: "JavaScript",
      desc: "Scripting language that allows you to implement complex features on web pages",
      icon: LogoJS,
    },
    {
      title: "C++",
      desc: "The generic language designed to humiliate generic people",
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
