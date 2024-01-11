import React from "react";
import Card from "../card/Card";
import { Link } from "react-router-dom";
import "./CardsLayout.css";

const CardsLayout = ({ data }) => {
  const cards = data.map((card) => {
    const { id, title, desc, icon, path } = card;
    return (
      <Link to={path}>
        <Card id={id} title={title} desc={desc} icon={icon} />
      </Link>
    );
  });

  return <div className="cards-layout">{cards}</div>;
};

export default CardsLayout;
