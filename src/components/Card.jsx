import React from "react";

function Card(props) {

  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <div className="card" onClick={handleClick}>
      <button className="card__trash" type="button"></button>
      <img className="card__image" src={props.card.link} alt="."></img>
      <div className="card__box">
        <h2 className="card__title">{props.card.name}</h2>
        <div className="card__like-box">
          <button className="card__like" type="button"></button>
          <p className="card__like-counter">{props.card.likes.length}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;