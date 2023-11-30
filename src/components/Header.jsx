import React from "react";
import logo from "../images/header__logo.svg";


function Header({isLoggedIn}) {


  return (
    <header className="header">
      <img src={logo} alt="Логотип проекта Место" className="header__logo" />
    </header>
  );
}

export default Header;
