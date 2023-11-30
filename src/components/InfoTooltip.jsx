import React from "react";

function InfoTooltip({ result, text }) {
  return (
    <div className="popup popup_active">
      <div className="popup__container">
        <img className="popup__result" alt="#" src={result}></img>
        <h2 className="popup__text">{text}</h2>
        <button className="popup__close-button" type="button"></button>
      </div>
    </div>
  );
}

export default InfoTooltip;
