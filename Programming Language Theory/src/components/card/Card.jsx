import React from "react";
import Arrow from "../../assets/arrow.png";
import "./Card.css";

const Card = ({ id, title, desc, icon, path }) => {
  let txtColor = "txt-white";
  let ribbonBorder = "";
  let arrowColor = "arrow-black";
  if (id === 1) {
    txtColor = "txt-black";
    ribbonBorder = "brd-black";
    arrowColor = "arrow-white";
  }
  const ribbonColor = `ribbon-color${id}`;
  console.log(ribbonColor);
  return (
    <div className="card">
      <div className="card__wrapper">
        <div className="card__text">
          <p className="card__title">{title}</p>
          <p className="card__desc">{desc}</p>
        </div>
        <img className="card__icon" src={icon}></img>
      </div>
      <div className="learn-more">
        <p className={`${txtColor}`}>Learn more</p>
        <img className={`learn-more__arrow ${arrowColor}`} src={Arrow}></img>
        <div
          className={`learn-more__ribbon ${ribbonBorder} ${ribbonColor}`}></div>
      </div>
    </div>
  );
};

export default Card;
