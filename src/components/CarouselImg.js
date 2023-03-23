import React from "react";
import "./CarouselImg.css";
import Carousel from "react-bootstrap/Carousel";
import Button from 'react-bootstrap/Button';
import image1 from './../components/images/1.jpg';
import image2 from './../components/images/2.jpg';
import image3 from './../components/images/3.jpg';

const CarouselImg = () => {
  return (
        <Carousel fade={true} pause={false} className="carousel">
          <Carousel.Item interval={2000}>
            <img className="d-block w-100" src={image1} alt="First slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              <Button variant="outline-dark">View More</Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img className="d-block w-100" src={image2} alt="Third slide" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <Button variant="outline-dark">View More</Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img className="d-block w-100" src={image3} alt="Third slide" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
              <Button variant="outline-dark">View More</Button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        )
};

export default CarouselImg;
