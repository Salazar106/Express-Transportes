import React from "react";
import "./home.css";
import Servicios from "./servicios";
import img1 from "./../../imgs/imgexpress.jpg";



const Home = () => {
  return (
    <>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide carousel-mine animate__animated animate__slideInLeft"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img1} className="d-block w-100 " alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img1} className="d-block w-100" alt="..." />
          </div>
        </div>
      </div>
      <Servicios />
    </>
  );
};

export default Home;
