import React, { useState } from "react";
import "./CarouselImg.css";
import image1 from "./../assets/carousel/pexels-karolina-grabowska-4239145.jpg";
import image2 from "./../assets/carousel/woman-g20b629547_1920.jpg";
import image3 from "./../assets/carousel/pexels-pixabay-48889.jpg";

const CarouselImg = () => {
  return (
    <div id="hero-carousel" className="carousel slide carousel-space" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#hero-carousel"
          data-bs-slide-to={0}
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        />
        <button
          type="button"
          data-bs-target="#hero-carousel"
          data-bs-slide-to={1}
          aria-label="Slide 2"
        />
        <button
          type="button"
          data-bs-target="#hero-carousel"
          data-bs-slide-to={2}
          aria-label="Slide 3"
        />
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active c-item">
          <img
            src={image1}
            className="d-block w-100 c-img"
            alt="Slide 1"
          />
          <div className="carousel-caption animated">
            <p className=" text-uppercase fs-3 mt-5  smallTxt">
              Cleaning
            </p>
            <h1 className="display-1 fw-bolder text-capitalize bannerCaption">
            Introducing the Best Cleaning Services
            </h1>
            <h5 className="text-focus-in">Ensuring the overall health and safety of individuals and the community.</h5>
            <div class="btn-container">
            <button className="btn px-4 py-2 fs-5 mt-5 carouselBtn">
              Start Now
            </button>
            <button
              className="btn btn-primary px-4 py-2 fs-5 mt-5 contactUsBtn"
              data-bs-toggle="modal"
              data-bs-target="#booking-modal"
            >
              Contact Us
            </button>
          </div>
          </div>
        </div>
        <div className="carousel-item c-item">
          <img
            src={image2}
            className="d-block w-100 c-img"
            alt="Slide 2"
          />
          <div className="carousel-caption animated">
            <p className="text-uppercase fs-3 mt-5 smallTxt">Sanitizing</p>
            <p className="display-1 fw-bolder text-capitalize bannerCaption">
            Providing You The Right Sanitizing Solutions
            </p>
            <h5 className="text-focus-in">Cleaning through sanitizing were you can help keep your house looking and smelling clean.</h5>
            <div class="btn-container">
            <button className="btn px-4 py-2 fs-5 mt-5 carouselBtn">
              Start Now
            </button>
            <button
              className="btn btn-primary px-4 py-2 fs-5 mt-5 contactUsBtn"
              data-bs-toggle="modal"
              data-bs-target="#booking-modal"
            >
              Contact Us
            </button>
          </div>
          </div>
        </div>
        <div className="carousel-item c-item">
          <img
            src={image3}
            className="d-block w-100 c-img"
            alt="Slide 3"
          />
          <div className="carousel-caption animated">
            <p className=" text-uppercase fs-3 mt-5  smallTxt">
              Polishing
            </p>
            <h1 className="display-1 fw-bolder text-capitalize bannerCaption">
            Delivering Our Accurate Work Just In Time!
            </h1>
            <h5 className="text-focus-in">Right tools and cleaning methods, prioritizing tasks, and ensuring properly trained and supervised staff.</h5>
            <div class="btn-container">
            <button className="btn px-4 py-2 fs-5 mt-5 carouselBtn">
              Start Now
            </button>
            <button
              className="btn btn-primary px-4 py-2 fs-5 mt-5 contactUsBtn"
              data-bs-toggle="modal"
              data-bs-target="#booking-modal"
            >
              Contact Us
            </button>
          </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#hero-carousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#hero-carousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default CarouselImg;
