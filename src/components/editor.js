import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

function PopupForm(props) {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formSubmitStatus, setFormSubmitStatus] = useState({
    submitting: false,
    error: false,
    success: false,
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormSubmitStatus({ submitting: true, error: false, success: false });
    try {
      await axios.post("https://formcarry.com/s/JqqxnckAco", formData, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      setFormSubmitStatus({ submitting: false, error: false, success: true });
    } catch (error) {
      setFormSubmitStatus({ submitting: false, error: true, success: false });
    }
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
            <Form.Group className="mb-3" controlId="chosen-plan">
              <Form.Label>Chosen Plan</Form.Label>
              <Form.Control placeholder={props.planName} disabled />
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
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button
              variant="primary"
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
