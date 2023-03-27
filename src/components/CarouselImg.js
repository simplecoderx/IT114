import React, { useState } from "react";
import "./CarouselImg.css";
import image1 from "./../components/images/1.jpg";

const CarouselImg = () => {
  return (
    <div id="hero-carousel" className="carousel slide" data-bs-ride="carousel">
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
            src="https://images.unsplash.com/photo-1579033461380-adb47c3eb938?fit=crop&w=1964&q=100"
            className="d-block w-100 c-img"
            alt="Slide 1"
          />
          <div className="carousel-caption top-0 mt-4 animated">
            <p className="mt-5 fs-3 text-uppercase smallTxt">
              Discover the hidden world
            </p>
            <h1 className="display-1 fw-bolder text-capitalize bannerTitle">
              The Aurora Tours
            </h1>
            <h5 className="bannerCaption">sdadad</h5>
            <button className="btn btn-primary px-4 py-2 fs-5 mt-5 carouselBtn">
              Book a tour
            </button>
            <button
              className="btn btn-primary px-4 py-2 fs-5 mt-5"
              data-bs-toggle="modal"
              data-bs-target="#booking-modal"
            >
              Book a tour
            </button>
          </div>
        </div>
        <div className="carousel-item c-item">
          <img
            src="https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a?fit=crop&w=2134&q=100"
            className="d-block w-100 c-img"
            alt="Slide 2"
          />
          <div className="carousel-caption top-0 mt-4">
            <p className="text-uppercase fs-3 mt-5 smallTxt">The season has arrived</p>
            <p className="display-1 fw-bolder text-capitalize bannerTitle">
              3 available tours
            </p>
            <h5 className="bannerCaption">sdadad</h5>
            <button
              className="btn btn-primary px-4 py-2 fs-5 mt-5"
              data-bs-toggle="modal"
              data-bs-target="#booking-modal"
            >
              Book a tour
            </button>
            <button
              className="btn btn-primary px-4 py-2 fs-5 mt-5"
              data-bs-toggle="modal"
              data-bs-target="#booking-modal"
            >
              Book a tour
            </button>
          </div>
        </div>
        <div className="carousel-item c-item">
          <img
            src="https://images.unsplash.com/photo-1612686635542-2244ed9f8ddc?fit=crop&w=2070&q=100"
            className="d-block w-100 c-img"
            alt="Slide 3"
          />
          <div className="carousel-caption top-0 mt-4">
            <p className="text-uppercase fs-3 mt-5 smallTxt">Destination activities</p>
            <p className="display-1 fw-bolder text-capitalize bannerTitle">
              Go glacier hiking
            </p>
            <h5 className="bannerCaption">sdadad</h5>
            <button
              className="btn btn-primary px-4 py-2 fs-5 mt-5"
              data-bs-toggle="modal"
              data-bs-target="#booking-modal"
            >
              Book a tour
            </button>
            <button
              className="btn btn-primary px-4 py-2 fs-5 mt-5"
              data-bs-toggle="modal"
              data-bs-target="#booking-modal"
            >
              Book a tour
            </button>
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
