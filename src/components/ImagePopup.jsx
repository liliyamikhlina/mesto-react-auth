import React from "react";

function ImagePopup() {
  return (
    <>
      <div className="popup popup-photo" id="popup-photo">
        <div className="popup__photo-container">
          <img className="popup__image" src="#" alt="."></img>
          <button className="popup__close-button" type="button"></button>
          <p className="popup__photo-text"></p>
        </div>
      </div>
      <div className="popup popup-photo" id="popup-photo">
        <div className="popup__photo-container">
          <img className="popup__image" src="#" alt="."></img>
          <button className="popup__close-button" type="button"></button>
          <p className="popup__photo-text"></p>
        </div>
      </div>
    </>
  );
}

export default ImagePopup;