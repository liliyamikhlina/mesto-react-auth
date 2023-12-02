import React, { useState } from "react";
import authApi from "../utils/authApi";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [formValue, setFormValue] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const {name, value} = e.target;

    setFormValue({
      ...formValue,
      [name]: value
    });
  }


  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    authApi
      .registerUser(formValue.email, formValue.password)
      .then(() => {
        navigate('/signin');
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
          value={formValue.email}
          onChange={handleChange}
        ></input>
        <input
          className="auth__input"
          type="password"
          name="password"
          placeholder="Пароль"
          required
          value={formValue.password}
          onChange={handleChange}
        ></input>
        <button className="auth__button" type="submit">
          Зарегистрироваться
        </button>
      </form>
      <Link to="/sign-in" className="auth__link">Уже зарегистрированы? Войти</Link>
    </div>
  );
}

export default Register;
