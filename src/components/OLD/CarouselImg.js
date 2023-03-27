import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import image1 from './../components/images/1.jpg'

export const CarouselImg = () => {
  return (
    <div>
      <Carousel>
        <div>
          <img src={image1} />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src={image1}/>
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src={image1} />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselImg