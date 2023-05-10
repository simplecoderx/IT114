import React from "react";
import './TwoDivs.css'
import TestimonialLeft from "./TestimonialLeft";
function TwoDivs() {
  return (
    <div class="container">
      <div class="row">
        <div class="col-4"><TestimonialLeft /></div>
        <div class="col-8"></div>
      </div>
    </div>
  );
}

export default TwoDivs;
