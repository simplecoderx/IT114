import { Card, Container, Row } from "react-bootstrap";
import { Carousel } from "react-bootstrap";
import "./TestimonialsPage.css";
import StarRating from "./StarRating";
import customer1 from "./../assets/feedback/mary-raz.jpg";
import customer2 from "./../assets/feedback/kevin-chen.jpg";
import customer3 from "./../assets/feedback/roga-acero.jpg";
import customer4 from "./../assets/feedback/maria-sotis.jpg";
import customer5 from "./../assets/feedback/micahel-wong.jpg";
import customer6 from "./../assets/feedback/jeric-holman.jpg";

function TestimonialsPage() {
  return (
    <>
      {/* <h1>Testimonials</h1> */}
      <div className="testimonialpage-div">
        <div className="testimonials-txt">
          <h6 className="liness">Testimonials</h6>
        </div>
        <div className="shortDescriptions">
          <h1 className="testimonials-title">
            Clients Feedback About Their Experience With Us
          </h1>
        </div>
      </div>
      <Container className="my-5" style={{ backgroundColor : "transparent" }}>
        {/* <Row className='gx-4 gy-4'>
        <Card className='col-md-4'>
          <Card.Body>
          <div className="row">
            <div className="col-md-6">
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
              <div className="testimonial-card">
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
          </Card.Body>
        </Card>
        <Card className='col-md-4'>
          <Card.Body>
            <Card.Title>Jane Smith</Card.Title>
            <Card.Text>
              "Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat."
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className='col-md-4'>
          <Card.Body>
            <Card.Title>Bob Johnson</Card.Title>
            <Card.Text>
              "Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur."
            </Card.Text>
          </Card.Body>
        </Card>
      </Row> */}
        <div className="row">
          <div className="col-md-4">
            <div className="testimonials-card">
              <img
                className="testimonial-image"
                src={customer1}
                alt="Testimonial"
              />
              <span className="testimonial-names">Mary Raz</span>
              <div className="star-ratings">
                <StarRating numStars={5} rating={4} />
              </div>
              <p style={{ textAlign: "justify" }} className="testimonial-text">
                "I recently hired HINLO Services to clean my office, and I must
                say I was impressed with their work. The cleaners arrived on
                time, very professional, meticulous and paid attention to
                detail, ensuring that every corner of the office was thoroughly
                cleaned. I highly recommended and will definitely be using their
                services again in the future."
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="testimonials-card break-div">
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
                extremely pleased with the results. Cleaners were very thorough,
                paid attention to the smallest details & took care of all the
                nooks and crannies and even managed to get rid of a stubborn
                stain. Professional and friendly team, and I felt comfortable
                having them in my home. I highly them and will definitely be
                using their services again."
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="testimonials-card break-div">
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
        </div>
        <br />
        <div className="row">
          <div className="col-md-4">
            <div className="testimonials-card top-card">
              <img
                className="testimonial-image"
                src={customer6}
                alt="Testimonial"
              />
              <span className="testimonial-names">Jeric Holman</span>
              <div className="star-ratings">
                <StarRating numStars={5} rating={5} />
              </div>
              <p style={{ textAlign: "justify" }} className="testimonial-text">
                "I recently hired this Services for a move-out cleaning, and
                they did an outstanding job. Very professional,
                thorough, and efficient. They left the apartment spotless, and I
                received my full security deposit back. The customer
                service was excellent, and they were responsive to all my
                questions and concerns. I highly recommend HINLO Cleaning
                Services for anyone who needs a move-out cleaning."
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="testimonials-card">
              <img
                className="testimonial-image"
                src={customer5}
                alt="Testimonial"
              />
              <span className="testimonial-names">Michael Wong</span>
              <div className="star-ratings">
                <StarRating numStars={5} rating={5} />
              </div>
              <p className="testimonial-text">
                "I recently had HINLO Cleaning Services come to my home for a
                regular cleaning, and I'm very satisfied with their work. They
                were friendly, professional, and they did an excellent job
                cleaning the bathrooms, kitchen, bedrooms, and living areas. The
                customer service was top-notch, were easy to communicate and I
                would definitely recommend them to anyone looking for a reliable
                and professional cleaning service."
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="testimonials-card">
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
      </Container>
    </>
  );
}

export default TestimonialsPage;
