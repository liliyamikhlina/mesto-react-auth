import React, { useState } from "react";
import authApi from "../utils/authApi";
import { Link, useNavigate } from "react-router-dom";
import InfoTooltip from "./InfoTooltip";
import success from "../images/success.png";
import fail from "../images/fail.png";

function Register() {
  const [formValue, setFormValue] = useState({
    email: '',
    password: '',
  });

  const [isTooltipOpen, setTooltipOpen] = useState(false);
  const [registrationResult, setRegistrationResult] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

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
        setTooltipOpen(true);
        setRegistrationResult({ result: success, text: "Вы успешно зарегистрировались!" });
        setTimeout(() => {
          navigate('/sign-in');
        }, 2000);
      })
      .catch((err) => {
        setTooltipOpen(true);
        setRegistrationResult({ result: fail, text: "Что-то пошло не так! Попробуйте ещё раз." });
        console.log(err);
      });
  };

  const handleTooltipClose = () => {
    setTooltipOpen(false);
    setRegistrationResult(null);
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

     {registrationResult && (
        <InfoTooltip
          result={registrationResult.result}
          text={registrationResult.text}
          isOpen={isTooltipOpen}
          onClose={handleTooltipClose}
        />
      )}
    </div>
  );
}

export default Register;
