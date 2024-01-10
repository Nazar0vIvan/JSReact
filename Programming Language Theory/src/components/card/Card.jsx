import React from "react";
import "./Card.css";

const Card = ({ title, desc, icon }) => {
  return (
    <div className="card">
      <div className="card__wrapper">
        <div className="card__text">
          <p className="card__title">{title}</p>
          <p className="card__desc">{desc}</p>
        </div>
        <img src={icon}></img>
      </div>
    </div>
  );
};

export default Card;
