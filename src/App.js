import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Navigation from "./components/Navigation";
import Contacto from "./components/Contacto";
import Registro from "./components/Registro";
import Footer from "./components/Footer";
import IniciarS from "./components/IniciarS";

function App() {
  return (
    <Router>
      <Navigation />
      <div className="container-body">
        <Route path="/contacto" component={Contacto} />
        <Route path="/crearusuario" component={Registro} />
        <Route path="/login" component={IniciarS} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
