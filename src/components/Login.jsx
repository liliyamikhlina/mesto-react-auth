import React, { useState } from "react";
import authApi from "../utils/authApi";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault(e);
    authApi
      .loginUser({ email, password })
      .then((data) => {
        console.log(data.token);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="auth">
      <p className="auth__title">Вход</p>
      <form onSubmit={handleLogin}>
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
          Войти
        </button>
      </form>
    </div>
  );
}

export default Login;
