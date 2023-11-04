import React, { useState, useEffect, useContext } from "react";
import api from "../utils/api";
import Card from "./Card";
import CurrentUserContext from "../contexts/CurrentUserContext";

function Main({
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  handleCardClick,
  handleDeleteClick,
}) {
  const currentUser = useContext(CurrentUserContext);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getInitialCards()
      .then((initialCards) => {
        setCards(initialCards);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-box">
          <button
            className="profile__avatar-button"
            onClick={onEditAvatar}
          ></button>
          <img
            src={currentUser.avatar}
            alt={currentUser.name}
            className="profile__avatar"
          />
        </div>
        <div className="profile__info">
          <div className="profile__box">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button
              className="profile__edit-button"
              type="button"
              aria-label="Изменить профиль"
              onClick={onEditProfile}
            ></button>
          </div>
          <p className="profile__job">{currentUser.about}</p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          onClick={onAddPlace}
        ></button>
      </section>

      <section className="elements">
        {cards.map((card) => (
          <Card
            key={card._id}
            card={card}
            onCardClick={handleCardClick}
            onDeleteClick={handleDeleteClick}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;
