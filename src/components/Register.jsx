import React, { useState } from "react";
import authApi from "../utils/authApi";
import { Link } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault(e);
    authApi
      .registerUser({ email, password })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="auth">
      <p className="auth__title">Регистрация</p>
      <form onSubmit={handleRegister}>
        <input
          className="auth__input"
          type="email"
          name="email"
          placeholder="Email"
          minLength="2"
          maxLength="40"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          className="auth__input"
          type="password"
          name="password"
          placeholder="Пароль"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button className="auth__button" type="submit">
          Зарегистрироваться
        </button>
      </form>
      <Link className="auth__link">Уже зарегистрированы? Войти</Link>
    </div>
  );
}

export default Register;
