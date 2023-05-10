import React from "react";
import "./TwoDivs.css";
import Testimonials from "./Testimonials";
import { Link } from 'react-router-dom';
function TwoDivs() {
  return (
    <div className="row">
      <div className="column1">
        <div className="testimonial-txt">
          <h6 className="hs-lines">Testimonials</h6>
        </div>
        <div className="shortDescription">
          <h1 className="testimonial-title">
            Clients Feedback About Their Experience With Us
          </h1>
          {/* <Link to="/testimonials"> */}
          <button className="btn px-4 py-2 mt-5 testimonialBtn">
            See All Testimonials
          </button>
          {/* </Link> */}
        </div>
      </div>
      <div className="column">
        <div className="carddiv">
          <Testimonials style={{ marginLeft: "50rem" }}/>
        </div>
      </div>
    </div>
  );
}

export default TwoDivs;
