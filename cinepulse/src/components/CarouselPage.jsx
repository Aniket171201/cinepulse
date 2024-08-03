import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { useEffect } from 'react';

const CarouselPage = () => {
  useEffect(() => {
    // Initialize Bootstrap Carousel manually
    const carouselElement = document.querySelector('#carouselExample');
    const carousel = new window.bootstrap.Carousel(carouselElement);
  }, []);

  return (
    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="/images/background.jpg" className="d-block w-100" alt="First slide" />
        </div>
        <div className="carousel-item">
          <img src="/images/2.jpeg" className="d-block w-100" alt="Second slide" />
        </div>
        <div className="carousel-item">
          <img src="/images/3.jpeg" className="d-block w-100" alt="Third slide" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default CarouselPage;
