import React from "react";
import "./Cabecera.css";
import logo from "../../imgs/417express.png";
import { Link } from "react-router-dom";

const Cabecera = () => {
  return (
    <>
      <nav className="nav row ">
        <div className="col-4 logotipo animate__animated animate__lightSpeedInLeft">
          <div className="row justify-content-left">
            <div className="col-auto">
              <img src={logo} alt="" />
            </div>
            <div className="col-auto">
              <h2>4/17 Express</h2>
              <p>Empresa de transporte.</p>
            </div>
          </div>
        </div>
        <div className="col-auto menu animate__animated  animate__lightSpeedInRight">
          <Link to="/">
            <i className="bi bi-house"></i> Bienvenido
          </Link>
          <Link to="">
            <i className="bi bi-chat-text"></i> Quienes Somos
          </Link>
          <Link to="">
            <i className="bi bi-car-front"></i> Nuestros Servicios
          </Link>
          <Link to="/singUp">
            <i className="bi bi-person-up"></i> Registrate
          </Link>
          <Link to="/login">
            <i className="bi bi-person-check"></i> Iniciar Sesion
          </Link>
        </div>
      </nav>

      
        
      
    </>
  );
};

export default Cabecera;
