import React from "react";

function Card({ card }) {
    return (
            <article className="card">
                <button className="card__trash" type="button"></button>
                <img className="card__image" src={card.link} alt="."></img>
                <div className="card__box">
                    <h2 className="card__title">{card.name}</h2>
                    <div className="card__like-box">
                        <button className="card__like" type="button"></button>
                        <p className="card__like-counter">{card.likes.length}</p>
                    </div>
                </div>
            </article>
    )
}

export default Card;