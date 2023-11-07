import React, { useRef } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const inputRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      link: inputRef.current.value,
    });
  }

  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      children={
        <>
          <input
            ref={inputRef}
            className="popup__input"
            id="input-avatar"
            type="url"
            name="link"
            placeholder="Ссылка на картинку"
            required
          ></input>
          <span className="popup__input-error input-avatar-error"></span>
        </>
      }
      buttonLabel="Сохранить"
    />
  );
}

export default EditAvatarPopup;
