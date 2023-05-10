import React from "react";
import "./Contact.css";
import FormContact from "./FormContact";
function Contact() {
  return (
    <div className="contact-div" id="contact">
      <div className="contact-div-left">
        <div className="contact-info">
          <h1>
            <i class="fas fa-map-marker-alt location-icon"></i>Our Locations
          </h1>
          <p>Purok 13, Villa Paraiso, Ampayon, Butuan City, Philippines</p>
          <h1>
            <i class="fas fa-phone location-icon"></i>Phone Numbers
          </h1>
          <p>+639073591168</p>
          <h1>
            <i class="fas fa-envelope location-icon"></i>Email
          </h1>
          <p>hinloservices@gmail.com</p>
        </div>
      </div>
      <div className="contact-div-right">
        <div className="KeepInTouch">
          <h1 className="bordered-text">
            Keep <span className="non-bordered-text a">In Touch</span>
          </h1>
          <p>We Will Answer Your Question As Soon As Possible!</p>
          <FormContact />
        </div>
      </div>
    </div>
  );
}

export default Contact;
