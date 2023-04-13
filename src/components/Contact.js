import React from "react";
import "./Contact.css";
import FormContact from "./FormContact";
function Contact() {
  return (
    <div className="contact-div" id="contact">
      {/* <div className="contact-div-left">
        <ul>
          <li className="icons-text"><i className="fa fa-map-marker"></i> Our Locations</li>
          <li>New York, NY 10001<br />Los Angeles, CA 90001</li>
          <li><i className="fa fa-phone"></i> Phone Numbers</li>
          <li>(212) 555-1234<br />(310) 555-5678</li>
          <li><i className="fa fa-envelope"></i> Emails</li>
          <li>info@example.com<br />support@example.com</li>
        </ul>
      </div> */}
      {/* <div className="contact-container"> */}
      <div className="contact-div-left">
        <div className="contact-info">
          <h1><i class="fas fa-map-marker-alt location-icon"></i>Our Locations</h1>
          <p>Purok 13, Villa Paraiso, Ampayon, Butuan City, Philippines</p>
          <h1><i class="fas fa-phone location-icon"></i>Phone Numbers</h1>
          <p>+639073591168</p>
          <h1><i class="fas fa-envelope location-icon"></i>Email</h1>
          <p>hinloservices@gmail.com</p>
        </div>
      </div>
      <div className="contact-div-right">
        <div className="KeepInTouch">
          <h1 className="bordered-text">
            Keep <span className="non-bordered-text a">In Touch</span>
          </h1>
          <p>We Will Answer Your Question As Soon As Possible!</p>
          <FormContact/>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}

export default Contact;
