import React from "react";
// import { Link, Routes, Route } from "react-router-dom";
import logo from "../images/header__logo.svg";

function Header({ email }) {
  return (
    <header className="header">
      <img src={logo} alt="Логотип проекта Место" className="header__logo" />
    </header>
  );
}

export default Header;
