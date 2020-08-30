import React, { Component } from 'react'
import './Contacto.css'
/* import { Link } from 'react-router-dom' */

export default class Contacto extends Component{

    render(){
        return(
            <section className="contact">
            <section className="contact__container">
            <h2  className="contact__container--h2">Contacto Alexa Coding!</h2>
                <form className="contact__container--form" method="post" action="/send-email" id="verifyForm">

                <input className="input" name="name" id="name" type="text" placeholder="Nombre *" autoFocus required/>
                    <input className="input" name="email" id="email" type="email" placeholder="Correo *" required/>
                    <input className="input" name="telefono" id="telefono" type="phone" placeholder="Movil"/>
                    <textarea className="input" name="message"  id="message" cols="30" rows="10" placeholder="Algún msj, duda o comentario . Escribe aquí!!!"></textarea> 
                  
                    <div className="contact__container--terminos">
                        <label htmlFor="">
                            
                            <input type="checkbox" name="" id="cbox1" value="checkbox"/>Acepto términos y condiciones
                        
                        </label>
                       
                    </div>

                    <input type="hidden" id="g-recaptcha-response" name="g-recaptcha-response"/>
                  <input type="hidden" name="action" value="validate_captcha"/>
                       
                  <button className=" button "type="submit">enviar</button>


                </form>
            </section>
        </section>
        
        )
       
    }
}
