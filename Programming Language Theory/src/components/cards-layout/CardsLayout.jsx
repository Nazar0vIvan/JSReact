import React from "react";
import Card from "../card/Card";
import "./CardsLayout.css";

const CardsLayout = ({ data }) => {
  const cards = data.map((card) => {
    const { title, desc, icon } = card;
    return <Card title={title} desc={desc} icon={icon} />;
  });

  return <div className="cards-layout">{cards}</div>;
};

export default CardsLayout;
