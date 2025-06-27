import React from "react";
import "./Card.css";

const CardSkill = ( {skill,  cardIcon, cardText} ) => {
  return (
    <div className="card-container">
    <div>
      <div className="card">
        <div className="card-icon">{cardIcon}</div>
        <h3 className="card-title"> {skill}</h3>
        <p className="card-text">
         {cardText}
        </p>
      </div>
    </div>
    </div>
  );
};

export default CardSkill;
