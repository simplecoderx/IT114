import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TestimonialLeft from "./TestimonialLeft";
import Testimonials from "./Testimonials";
import "./Testimonials.css";
function Testimonial() {
  return (
    <div className="row">
      <div class="col-lg col1"><TestimonialLeft /></div>
      <div class="col-lg col2"><Testimonials /></div>
    </div>
  );
}

export default Testimonial;
