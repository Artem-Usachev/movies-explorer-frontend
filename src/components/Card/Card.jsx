import React from "react";

const Card = ({ card }) => {
  console.log(card);
  return (
    <div className={`card ${card.markerClass}`}>
      <img className="card__img" alt="превью фильма" src={card.link} />
      <div className="card__title-heart-box">
        <h2 className="card__title">{card.title}</h2>
        <button className={`card__heart-btn ${card.btn}`}></button>
      </div>
      <figcaption className="card__timeline">{card.time}</figcaption>
    </div>
  );
};
export default Card;
