import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import "./PopupForm.css";

function PopupForm(props) {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    chosenplan: props.planName,
    location: "",
    message: "",
  });
  const [formSubmitStatus, setFormSubmitStatus] = useState({
    submitting: false,
    error: false,
    success: false,
  });
  const [phoneError, setPhoneError] = useState(null);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const resetForm = () => {
    setFormData({ name: "", email: "", message: "" });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Validate phone number before submitting
    const phoneRegex = /^\d{11}$/; // Regex for 10-digit phone number
    if (!phoneRegex.test(formData.phone)) {
      setPhoneError("Please enter a valid 11-digit phone number");
      return;
    }
    setFormSubmitStatus({ submitting: true, error: false, success: false });
    try {
      await axios.post("https://formspree.io/f/xlekvrpj", formData, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          // 'formcarry-key': 'YOUR_FORMCARRY_API_KEY',
        },
      });
      setFormSubmitStatus({ submitting: false, error: false, success: true });
      resetForm();
    } catch (error) {
      setFormSubmitStatus({ submitting: false, error: true, success: false });
    }
    resetForm();
  };

  return (
    <>
      <Button className="planbutton" onClick={handleShow}>
        {props.buttonLabel}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.planName} Plan</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{props.planDescription}</p>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3 mt-0" controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3 mt-0" controlId="phonenumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="+63xxxxxxxxxx"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                isInvalid={!!phoneError}
                required
              />
              <Form.Control.Feedback type="invalid">
                {phoneError}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="chosenplan">
              <Form.Label>Chosen Plan</Form.Label>
              <Form.Control
                placeholder={props.planName}
                type="text"
                name="chosenplan"
                value={formData.planName}
                disabled
              />
              <input
                type="hidden"
                name="chosenplan"
                value={formData.chosenplan}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="location">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your location"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="message">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter your message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            {formSubmitStatus.error && (
              <p className="text-danger">
                There was an error submitting the form. Please try again later.
              </p>
            )}
            {formSubmitStatus.success && (
              <p className="text-success">Thank you for your submission!</p>
            )}
            <Button className="closebtn" onClick={handleClose}>
              Close
            </Button>
            <Button
              className="submitbtn"
              type="submit"
              disabled={formSubmitStatus.submitting}
            >
              {formSubmitStatus.submitting ? "Submitting..." : "Submit"}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default PopupForm;
