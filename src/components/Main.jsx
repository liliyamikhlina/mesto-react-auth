import React, { useState, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";
import api from "../utils/api";
import Card from "./Card";
import ImagePopup from "./ImagePopup";

function Main({
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  isEditAvatarPopupOpen,
  isEditProfilePopupOpen,
  isAddPlacePopupOpen,
  onClose,
  selectedCard,
  handleCardClick,
}) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getUserInfo()
      .then((userInfo) => {
        setUserName(userInfo.name);
        setUserDescription(userInfo.about);
        setUserAvatar(userInfo.avatar);
      })
      .catch((err) => console.log(err));

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
            src={userAvatar}
            alt="Жак-Ив Кусто"
            className="profile__avatar"
          />
        </div>
        <div className="profile__info">
          <div className="profile__box">
            <h1 className="profile__name">{userName}</h1>
            <button
              className="profile__edit-button"
              type="button"
              aria-label="Изменить профиль"
              onClick={onEditProfile}
            ></button>
          </div>
          <p className="profile__job">{userDescription}</p>
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
          />
        ))}
      </section>

      <PopupWithForm
        name="profile"
        title="Редактировать профиль"
        isOpen={isEditProfilePopupOpen}
        onClose={onClose}
      />
      <PopupWithForm
        name="card"
        title="Новое Место"
        isOpen={isAddPlacePopupOpen}
        onClose={onClose}
      />
      <PopupWithForm
        name="avatar"
        title="Обновить аватар"
        isOpen={isEditAvatarPopupOpen}
        onClose={onClose}
      />

      <ImagePopup card={selectedCard} onClose={onClose} />
    </main>
  );
}

export default Main;
