import React from "react";
import "./home.css";
import serv1 from "../../imgs/atencion-medica.png";
import serv2 from "../../imgs/business-people.png";
import serv3 from "../../imgs/discapacitado.png";
import serv4 from "../../imgs/ejecutivos.png";
import serv5 from "../../imgs/viajeros.png";


const Servicios = () => {
  return (
    <>
      <div className="row ourtex animate__animated animate__flipInX">
        <div className="col text-center">
          <h1>Nuestros servicios especiales.</h1>
          <p>
            Te ofrecemos servicios totalmente acomodados y pensados en cada
            necesidad.
          </p>
          <p>Destinando el vehículo idóneo para ello. Nuestros
            servicios son:</p>
        </div>
      </div>
      <div className="row justify-content-center animate__animated animate__zoomIn">
        <div className="col-auto mycards">
          <div class="card w-100">
            <img src={serv3} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5>TRANSPORTE DE PERSONAL CON MOVILIDAD REDUCIDA</h5>
            </div>
          </div>
        </div>
        <div className="col-auto mycards">
          <div class="card w-100">
            <img src={serv1} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5>TRANSPORTE DE PERSONAL DE SALUD</h5>
            </div>
          </div>
        </div>
        <div className="col-auto mycards">
          <div class="card w-100">
            <img src={serv4} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5>TRANSPORTE DE PERSONAL EJECUTIVO</h5>
            </div>
          </div>
        </div>
        <div className="col-auto mycards">
          <div class="card">
            <img src={serv2} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5>TRANSPORTE DE PERSONAL EMPRESARIAL</h5>
            </div>
          </div>
        </div>
        <div className="col-auto mycards">
          <div class="card w-100">
            <img src={serv5} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5>TRANSPORTE DE PERSONAL QUE VIAJAN OCASIONALMENTE</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Servicios;
