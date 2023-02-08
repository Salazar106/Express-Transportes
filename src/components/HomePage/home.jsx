import React from "react";
import "./home.css";
import Servicios from "./servicios";
import img1 from "./../../imgs/imgexpress.jpg";
import img2 from "../../imgs/img.png";


const Home = () => {
  return (
    <>
      <div
        id="carouselExampleSlidesOnly"
        class="carousel slide carousel-mine animate__animated animate__slideInLeft"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={img1} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={img1} class="d-block w-100 " alt="..." />
          </div>
          <div class="carousel-item">
            <img src={img1} class="d-block w-100" alt="..." />
          </div>
        </div>
      </div>
      <Servicios />
    </>
  );
};

export default Home;
