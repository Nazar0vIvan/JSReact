import React from "react";
import CardsLayout from "../components/cards-layout/CardsLayout";
import cardsData from "../../public/cards-data.js";
import style from "../App.module.css";

function Home() {
  return (
    <div className={style.container}>
      <CardsLayout data={cardsData} />;
    </div>
  );
}

export default Home;
