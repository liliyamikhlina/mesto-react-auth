import React from "react";

function PopupWithForm({
  name,
  title,
  isOpen,
  onClose,
  children,
  onSubmit,
  buttonLabel
}) {
  return (
    <div
      className={`popup ${isOpen ? "popup_active" : ""}`}
      id={`popup-${name}`}
    >
      <div className={`popup__container popup__${name}-container`}>
        <h2 className="popup__title">{title}</h2>
        <form
          id={`popup__form-${name}`}
          className="popup__form"
          method="get"
          name={`${name}-form`}
          noValidate
          onSubmit={onSubmit}
        >
          {children}
          <button name="submit" className="popup__submit-button" type="submit">
            {buttonLabel}
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
