import React, { useState } from "react";
import authApi from "../utils/authApi";

function Auth({ title, buttonLabel, children }) {
  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (title === "Вход") {
      handleLogin();
    } else if (title === "Регистрация") {
      handleRegister();
    }
  };

  const handleLogin = () => {
    authApi
      .loginUser({ email, password })
      .then((data) => {
        console.log('Login successful:', data.token);
      })
      .catch((error) => {
        // Handle login error
        console.error('Login error:', error);
      });
  };

  const handleRegister = () => {
    authApi
      .registerUser({ email, password })
      .then((data) => {
        console.log('Registration successful:', data);
      })
      .catch((error) => {
        console.error('Registration error:', error);
      });
  };

  return (
    <div className="auth">
      <p className="auth__title">{title}</p>
      <form onSubmit={handleSubmit}>
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
          {buttonLabel}
        </button>
      </form>
      {children}
    </div>
  );
}

export default Auth;
