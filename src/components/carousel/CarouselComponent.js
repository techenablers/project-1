import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import im from '../../assets/im.jpeg';
import landingImage from '../../assets/landingImage.jpeg';
import landingImage1 from '../../assets/landingImage1.jpeg';
import mf from '../../assets/mf.jpeg';

function CarouselComponent() {
  return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel " data-bs-interval="2000">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={im} className="d-block" style={{ width: '100%', height: '500px  ' }} alt="Slide 1" />
        </div>
        <div className="carousel-item">
          <img src={landingImage} className="d-block" style={{ width: '100%', height: '500px  ' }} alt="Slide 2" />
        </div>
        <div className="carousel-item">
          <img src={landingImage1} className="d-block" style={{ width: '100%', height: '500px ' }} alt="Slide 3" />
        </div>
        <div className="carousel-item">
          <img src={mf} className="d-block" style={{ width: '100%', height: '500px  ' }}   alt="Slide 4" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default CarouselComponent;
