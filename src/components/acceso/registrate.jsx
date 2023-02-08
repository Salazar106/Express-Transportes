import React from "react";
import { Link } from "react-router-dom";

const SingUp = () => {
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-9 mt-5 container animate__animated animate__zoomIn">
          <form>
            <h1 className="h3 mb-3 fw-normal text-center mt-5">
              Completa esta informacion
            </h1>

            <div className="row">
              <div className="col">
                <div className="form-floating mt-3">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  ></input>
                  <label for="floatingInput">Nombres</label>
                </div>
              </div>
              <div className="col">
                <div className="form-floating mt-3">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  ></input>
                  <label for="floatingInput">Apellidos</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="form-floating mt-3">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  ></input>
                  <label for="floatingInput">EPS</label>
                </div>
              </div>
              <div className="col">
                <div className="form-floating mt-3">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  ></input>
                  <label for="floatingInput">Direccion</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="form-floating mt-3">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  ></input>
                  <label for="floatingInput">Cedula</label>
                </div>
              </div>
              <div className="col">
                <div className="form-floating mt-3">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  ></input>
                  <label for="floatingInput">Nombre de Usuario</label>
                </div>
              </div>
            </div>

            <div className="form-floating mt-3">
              <input
                type="password"
                className="form-control"
                id="Password"
                placeholder="Password"
              ></input>
              <label for="Password">✉️ Correo Electronico</label>
            </div>
            <div className="form-floating mt-3">
              <input
                type="password"
                className="form-control"
                id="Password"
                placeholder="Password"
              ></input>
              <label for="Password">🔑 Contraseña</label>
            </div>
            <div className="form-floating mt-3">
              <input
                type="password"
                className="form-control"
                id="Password"
                placeholder="Password"
              ></input>
              <label for="Password">🔑 Confirmar Contraseña</label>
            </div>
            <p className="text-center m-3">
              Ya tienes una Cuenta?<Link to="/login"> Ingresa aqui</Link>
            </p>
            <div className="row justify-content-center">
              <button className="w-75 btn btn-mine1 mt-2" type="submit">
                Registrate
              </button>
            </div>

            <p className="mt-2 mb-5 text-muted text-end">
              ©️ 4/17 Express 2023
            </p>
          </form>
        </div>
      </div>
    </>
  );
};
export default SingUp;
