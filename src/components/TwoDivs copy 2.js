import React from "react";
import "./TwoDivs.css";
import Cards from "./Cards";
import Testimonials from "./Testimonials";

function TwoDivs() {
  return (
    <div className="row">
      <div className="column1">
        <h2>Column 1</h2>
        <p>Some text..</p>
      </div>
      <div className="column">
        <div className="carddiv1"><Testimonials/></div>
        {/* <div className="carddiv"><Cards/></div> */}
      </div>
      </div>
  );
}

export default TwoDivs;
