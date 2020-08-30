import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css'

export default class Navigation extends Component {
    render() {
        return (
            <header className="header">
                
                <input type="checkbox" id="btn-menu"/>
                <label  htmlFor="btn-menu">< img className="img-logo" src={'./ponqueprogramadornodejs5.png'} alt="Logo" /> </label>   
                <nav className="container__nav "id="navbarNav">
                        <ul className="container__nav--ul">
                            <li className="nav-item ">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link" to="/about">Sobre nosotros</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/productos">Productos</Link>
                            </li>
                            <li >
                                <Link  to="/"> < img className="nav__img" src={'./ponqueprogramadornodejs5.png'} alt="Logo" /></Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/longin">iniciar sesión</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/crearusuario">Registrate</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contacto">Contacto</Link>
                            </li>

                        </ul>
                
                </nav>
            </header>

        )

    }
}