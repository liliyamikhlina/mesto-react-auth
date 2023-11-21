import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import api from "../utils/api";
import CurrentUserContext from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import Register from "./Register";
import Login from "./Login";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

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
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  };

  const handleUpdateAvatar = (userInfo) => {
    api
      .changeAvatar(userInfo)
      .then((updatedUserInfo) => {
        setCurrentUser(updatedUserInfo);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  };

  const handleCardLike = (card) => {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    const toggleCardLike = isLiked ? api.dislikeCard : api.likeCard;
    toggleCardLike(card._id)
      .then((newCard) => {
        const newCards = cards.map((c) => (c._id === card._id ? newCard : c));
        setCards(newCards);
      })
      .catch((err) => console.log(err));
  };

  const handleCardDelete = (card) => {
    api
      .deleteCard(card._id)
      .then(() => {
        const newCards = cards.filter((c) => c._id !== card._id);
        setCards(newCards);
      })
      .catch((err) => console.log(err));
  };

  const handleAddPlaceSubmit = (newCard) => {
    api
      .addCard(newCard)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    api
      .getUserInfo()
      .then((userInfo) => {
        setCurrentUser(userInfo);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    api
      .getInitialCards()
      .then((initialCards) => {
        setCards(initialCards);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="root">
        <div className="page">
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                currentUser ? (
                  <Main
                    onEditAvatar={handleEditAvatarClick}
                    onEditProfile={handleEditProfileClick}
                    onAddPlace={handleAddPlaceClick}
                    handleCardClick={handleCardClick}
                    cards={cards}
                    onCardLike={handleCardLike}
                    onCardDelete={handleCardDelete}
                  />
                ) : (
                  <Route path="/sign-up"/>
                )
              }
            />

            {/* <Route path="/sign-up" element={<Register />}/> */}

            {/* <Route path="/sign-in" element={<Login />}/> */}
              
          </Routes>

          <Register />
          <Login />
          <Footer />

          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          />

          <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            onAddPlace={handleAddPlaceSubmit}
          />

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
