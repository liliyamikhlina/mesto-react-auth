import React, { useState, useEffect } from "react";
import kusto from "../images/kusto.jpg";
import PopupWithForm from "./PopupWithForm";

function Main({
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  isEditAvatarPopupOpen,
  isEditProfilePopupOpen,
  isAddPlacePopupOpen,
  onClose,
}) {


  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-box">
          <button
            className="profile__avatar-button"
            onClick={onEditAvatar}
          ></button>
          <img src={kusto} alt="Жак-Ив Кусто" className="profile__avatar" />
        </div>
        <div className="profile__info">
          <div className="profile__box">
            <h1 className="profile__name">Жак-Ив Кусто</h1>
            <button
              className="profile__edit-button"
              type="button"
              aria-label="Изменить профиль"
              onClick={onEditProfile}
            ></button>
          </div>
          <p className="profile__job">Исследователь океана</p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          onClick={onAddPlace}
        ></button>
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

    </main>
  );
}

export default Main;
