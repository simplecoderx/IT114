import React from "react";
import "./TestimonialLeft.css";
import { Link } from "react-router-dom";

function TestimonialLeft() {
  return (
    <div className="row">
      <div className="colm1">
        <div className="testimonial-ctn">
          <div className="testimonial-txt">
            <h6 className="hs-lines">Testimonials</h6>
          </div>
          <div className="shortDescription">
            <h1 className="testimonial-title">
              Clients Feedback About Their Experience With Us
            </h1>
            <Link to="/testimonials" style={{ textDecoration: "none" }}>
              <button className="btn px-4 py-2 mt-5 testimonialBtn">
                See All Testimonials
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialLeft;
