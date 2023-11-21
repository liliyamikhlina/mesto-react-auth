import React from "react";

function Auth({ title, buttonLabel }) {
  return (
    <div className="auth">
      <p className="auth__title">{title}</p>
      <form>
        <input
          className="auth__input"
          type="email"
          name="email"
          placeholder="Email"
          minLength="2"
          maxLength="40"
          required
        ></input>
        <input
          className="auth__input"
          type="password"
          name="password"
          placeholder="Пароль"
          required
        ></input>
        <button className="auth__button" type="submit">{buttonLabel}</button>
      </form>
    </div>
  );
}

export default Auth;
