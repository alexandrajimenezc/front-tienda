import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./IniciarS.css";

export default class Iniciar extends Component {
  render() {
    return (
      <section className="login">
        <section className="login__container">
          <h2 className="login__container--h2">
            Iniciar Sesión en Alexa Coding!
          </h2>
          <form
            className="login__container--form"
            method="post"
            action="/send-login"
            id="verifyForm"
          >
            <input
              className="input"
              name="email"
              id="email"
              type="email"
              placeholder="Correo "
              required
            />

            <input
              className="input"
              name="password"
              id="password"
              type="text"
              placeholder="Contraseña"
            />

            <input
              type="hidden"
              id="g-recaptcha-response"
              name="g-recaptcha-response"
            />
            <input type="hidden" name="action" value="validate_captcha" />

            <button className=" button " type="submit">
              Entrar
            </button>
          </form>
          <section className="login__container--social-media">
            <Link className="login-item" to="/">
              {" "}
              <img
                className="social__img"
                src={"./logogoogle.png"}
                alt="Logo"
              />
              Inicia sesión con Google
            </Link>

            <Link className="login-item" to="/">
              {" "}
              <img
                className="social__img"
                src={"./logotwitter.png"}
                alt="Logo"
              />
              Inicia sesión con Twitter
            </Link>
          </section>

          <p className="login__container--register">
            ¿No tienes ninguna cuenta?{" "}
            <Link className="login-item" to="/crearusuario">
              Regístrate
            </Link>
          </p>
        </section>
      </section>
    );
  }
}
