import React from "react";

function PopupWithForm({ name, title, isOpen, onClose }) {
  return (
    <div
      className={`popup ${isOpen ? "popup_active" : ""}`}
      id={`popup-${name}`}
    >
      <div className={`popup__container popup__${name}-container`}>
        <h2 className="popup__title">{title}</h2>
        <form
          className="popup__form"
          method="get"
          name={`${name}-form`}
          noValidate
        >
          <input
            className="popup__input"
            id="input-name"
            type="text"
            name="name"
            placeholder="Ваше имя"
            minLength="2"
            maxLength="40"
            required
          ></input>
          <span className="popup__input-error input-name-error"></span>
          <input
            className="popup__input"
            id="input-job"
            type="text"
            name="job"
            placeholder="О себе"
            minLength="2"
            maxLength="200"
            required
          ></input>
          <span className="popup__input-error input-job-error"></span>
          <button
            name="submit"
            className="popup__submit-button"
            type="submit"
            disabled
          >
            Сохранить
          </button>
        </form>
        <button
          className="popup__close-button"
          type="button"
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
}

export default PopupWithForm;
