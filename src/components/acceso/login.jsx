import React from "react";
import "./styles.css";
import {Link} from 'react-router-dom'

const Login = () => {
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-5 mt-5 container animate__animated animate__zoomIn">
          <form>
            <h1 className="h3 mb-3 fw-normal text-center mt-5">Ingresa Tus Datos</h1>

            <div className="form-floating mt-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              ></input>
              <label for="floatingInput">🙎🏻‍♂️ Usuario</label>
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
            <p className="text-center m-3">Olvidaste tu contraseña? <Link to='/singUp'>Ingresa aqui</Link></p>
            <div className="row justify-content-center">
            <button className="w-75 btn btn-mine1 mt-2" type="submit">
              Ingresar
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
export default Login;
