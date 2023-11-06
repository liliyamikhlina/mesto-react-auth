import React, { useState, useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import api from "../utils/api";
import CurrentUserContext from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState({});

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const handleDeleteClick = () => {
    api.deleteCard(currentUser.id);
  };

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  };

  const handleUpdateUser = (userInfo) => {
    api
      .editProfile(userInfo)
      .then((updatedUserInfo) => {
        setCurrentUser(updatedUserInfo);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        closeAllPopups();
      });
  };

  const handleUpdateAvatar = (userInfo) => {
    console.log(userInfo);
    api
      .changeAvatar(userInfo)
      .then((updatedUserInfo) => {
        setCurrentUser(updatedUserInfo);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        closeAllPopups();
      });
  };

  useEffect(() => {
    api
      .getUserInfo()
      .then((userInfo) => {
        setCurrentUser(userInfo);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="root">
        <div className="page">
          <Header />
          <Main
            onEditAvatar={handleEditAvatarClick}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            handleCardClick={handleCardClick}
            handleDeleteClick={handleDeleteClick}
          />
          <Footer />
          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          />
          {/* <PopupWithForm
            name="card"
            title="Новое Место"
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            children={
              <>
                <input
                  className="popup__input"
                  id="input-place"
                  type="text"
                  name="place"
                  placeholder="Название"
                  minLength="2"
                  maxLength="30"
                  required
                ></input>
                <span className="popup__input-error input-place-error"></span>
                <input
                  className="popup__input"
                  id="input-link"
                  type="url"
                  name="link"
                  placeholder="Ссылка на картинку"
                  required
                ></input>
                <span className="popup__input-error input-link-error"></span>{" "}
              </>
            }
            buttonLabel="Создать"
          /> */}

          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
          />
          
          <ImagePopup card={selectedCard} onClose={closeAllPopups} />

        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
