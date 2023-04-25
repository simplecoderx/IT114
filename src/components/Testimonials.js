import { useState } from "react";
import { Carousel } from "react-bootstrap";
import "./Testimonial.css";
import StarRating from "./StarRating";
import customer1 from "./../assets/feedback/mary-raz.jpg";
import customer2 from "./../assets/feedback/kevin-chen.jpg";
import customer3 from "./../assets/feedback/roga-acero.jpg";
import customer4 from "./../assets/feedback/maria-sotis.jpg";

function Testimonials() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="testimonialContainer" id="testimonials">
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        interval={5000}
        pause={false}
        controls={false}
        indicators={false}
        slide={true}
        fade={false}
        className="carousel"
        itemWidth={300}
        itemPadding={[0, 10]}
        centerMode={false}
        slidesToSlide={1}
        responsive={{
          desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2,
            slidesToSlide: 1,
            partialVisibilityGutter: 40,
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            slidesToSlide: 1,
            partialVisibilityGutter: 30,
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1,
            partialVisibilityGutter: 30,
          },
        }}
      >
        <Carousel.Item>
          <div className="row">
            <div className="col-md-6 sample">
              <div className="testimonial-card">
                <img
                  className="testimonial-image"
                  src={customer1}
                  alt="Testimonial"
                />
                <span className="testimonial-names">Mary Raz</span>
                <div className="star-ratings">
                  <StarRating numStars={5} rating={4} />
                </div>
                <p
                  style={{ textAlign: "justify" }}
                  className="testimonial-text"
                >
                  "I recently hired HINLO Services to clean my office, and I
                  must say I was impressed with their work. The cleaners arrived
                  on time, very professional, meticulous and paid attention to
                  detail, ensuring that every corner of the office was
                  thoroughly cleaned. I highly recommended and will definitely
                  be using their services again in the future."
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="testimonial-card testimonial2-cards">
                <img
                  className="testimonial-image"
                  src={customer3}
                  alt="Testimonial"
                />
                <span className="testimonial-names">Roga Acero</span>
                <div className="star-ratings">
                  <StarRating numStars={5} rating={5} />
                </div>
                <p className="testimonial-text">
                  "I recently had them come to my home, and I must say, I'm
                  extremely pleased with the results. Cleaners were very
                  thorough, paid attention to the smallest details & took care
                  of all the nooks and crannies and even managed to get rid of a
                  stubborn stain. Professional and friendly team, and I felt
                  comfortable having them in my home. I highly them and will definitely be using their services again."
                </p>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="row">
            <div className="col-md-6">
              <div className="testimonial-card">
                <img
                  className="testimonial-image"
                  src={customer4}
                  alt="Testimonial"
                />
                <span className="testimonial-names">Maria Sotis</span>
                <div className="star-ratings">
                  <StarRating numStars={5} rating={4} />
                </div>
                <p className="testimonial-text">
                  "I hired them for a deep cleaning of my restaurant, and I was
                  blown away by the level of service they provided. They're
                  punctual, well-organized, and efficient, worked tirelessly for
                  hours, leaving the restaurant sparkling clean and smelling
                  fresh. They managed to clean some areas that I thought were
                  impossible to clean. Highly recommended! "
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="testimonial-card testimonial2-cards">
                <img
                  className="testimonial-image"
                  src={customer2}
                  alt="Testimonial"
                />
                <span className="testimonial-names">Kevin Chen</span>
                <div className="star-ratings">
                  <StarRating numStars={5} rating={4} />
                </div>
                <p className="testimonial-text">
                  "The team was friendly and professional, worked quickly and
                  efficiently and able to remove all the stains and spots on my
                  carpets, and they looked and smelled like new. I highly
                  recommend HINLO Cleaning Services for their expertise,
                  professionalism, and exceptional customer service."
                </p>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Testimonials;

// import React from 'react'

// const Testimonials = () => {
//   return (
//     <div>    <div className="row">
//     <div className="column1">
//       <h2>Column 1</h2>
//       <p>Some text..</p>
//     </div>
//     <div className="column">
//       <div className="carddiv1"><Cards/></div>
//       {/* <div className="carddiv"><Cards/></div> */}
//     </div>
//     </div></div>
//   )
// }

// export default Testimonials
