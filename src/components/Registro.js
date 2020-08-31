import React, { Component } from "react";
import "./Registro.css";


export default class Registro extends Component {
  render() {
    return (
      <section className="register">
        <section className="register__container">
          <h2 className="register__container--h2">Date de alta/Registro Alexa Coding!</h2>
          <form
            className="register__container--form"
            method="post"
            action="/send-register"
            id="verifyForm"
          >
            <input
              className="input"
              name="name"
              id="name"
              type="text"
              placeholder="Nombre *"
              autoFocus
              required
            />
            <input
              className="input"
              name="email"
              id="email"
              type="email"
              placeholder="Correo *"
              required
            />
            <input
              className="input"
              name="password"
              id="password"
              type="text"
              placeholder="Contraseña *"
              required
            />
            <input
              className="input"
              name="telefono"
              id="telefono"
              type="phone"
              placeholder="Movil"
            />
             <input
              className="input"
              name="address"
              id="address"
              type="text"
              placeholder="Dirección"
            />

            <div className="register__container--terminos">
              <label htmlFor="">
                <input type="checkbox" name="" id="cbox1" value="checkbox" />
                Acepto términos y condiciones
              </label>
            </div>

           
            <p className="register__container--iniciar">¿Tienes cuenta?  <a href="/">Iniciar sesión</a></p>
           

            
            <input
              type="hidden"
              id="g-recaptcha-response"
              name="g-recaptcha-response"
            />
            <input type="hidden" name="action" value="validate_captcha" />

            <button className=" button " type="submit">
             Registrar
            </button>
          </form>
        </section>
      </section>
    );
  }
}
