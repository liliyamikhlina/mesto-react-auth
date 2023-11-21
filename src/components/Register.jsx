import React from "react";
import Auth from "./Auth";

function Register() {
    return(
        <>
       <Auth 
       title="Регистрация"
       buttonLabel="Зарегистрироваться"
       />
       {/* <p>Уже зарегистрированы? Войти</p> */}
       </>
    )

}

export default Register;