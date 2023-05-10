import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useForm } from "@formspree/react";
import "./Contact.css";

function FormContact() {
  const [showModal, setShowModal] = useState(false);
  const [showOfflineModal, setShowOfflineModal] = useState(false);
  const [formStatus, setFormStatus] = useState({});
  const handleClose = () => setShowModal(false);
  const handleOfflineClose = () => setShowOfflineModal(false);
  const [state, handleSubmit] = useForm("xayzkwvw");

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setFormStatus({ submitting: true });
        if (!navigator.onLine) {
          setShowOfflineModal(true);
          event.target.reset();
      return;
    }
    const { error } = await handleSubmit(event);

    if (error) {
      setFormStatus({ submitting: false, status: "error" });
      setShowOfflineModal(true);
    } else {
      setFormStatus({ submitting: false, status: "success" });
      setShowModal(true);
      event.target.reset();
    }
  };

  return (
    <div>
      <Form className="form-contact" onSubmit={handleFormSubmit}>
        <div className="d-flex mb-3 nameEmailContainer">
          <Form.Group
            className="me-3 name-input"
            controlId="formBasicName"
          >
            <Form.Label htmlFor="name">Name*</Form.Label>
            <Form.Control
              id="email"
              type="name"
              name="name"
              placeholder="Enter your name"
              required
            />
          </Form.Group>
          <Form.Group className="me-3 email-input" controlId="formBasicEmail">
            <Form.Label htmlFor="email">Email*</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              className="email-field"
              required
            />
          </Form.Group>
        </div>
        <Form.Group className="mb-3" controlId="formBasicSubject">
          <Form.Label>Subject*</Form.Label>
          <Form.Control
            type="text"
            name="subject"
            className="subject-field"
            placeholder="Enter the subject of your message"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicMessage">
          <Form.Label>Your Message*</Form.Label>
          <Form.Control
            id="message"
            name="message"
            as="textarea"
            rows={3}
            placeholder="Enter your message"
            className="message-field"
            required
          />
        </Form.Group>
        <Button type="submit" className="FormContactBtn" disabled={state.submitting}>
          {state.submitting ? "Submitting..." : "Submit"}
        </Button>
      </Form>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Success!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Your message has been sent successfully.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showOfflineModal} onHide={handleOfflineClose}>
        <Modal.Header closeButton>
          <Modal.Title>Error!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>You are currently offline. Please check your internet connection.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowOfflineModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default FormContact;

