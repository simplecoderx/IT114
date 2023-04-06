// import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import Modal from "react-bootstrap/Modal";
// import { useForm } from "@formcarry/react";

// import "./Contact.css";

// function FormContact() {
//   const { state, submit } = useForm({
//     id: "JqqxnckAco",
//   });
//   const [showModal, setShowModal] = useState(false);

//   // Function to handle the modal close event
//   const handleClose = () => setShowModal(false);

//   // Function to handle the form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await submit(e);
//     setShowModal(true);
//   };

//   return (
//     <div>
//       <Form
//         className="form-contact"
//         onSubmit={handleSubmit} // Pass the modified handleSubmit function here
//       >
//         <div className="d-flex mb-3">
//           <Form.Group
//             style={{ width: "50%" }}
//             className="me-3"
//             controlId="formBasicName"
//           >
//             <Form.Label htmlFor="name">Name</Form.Label>
//             <Form.Control
//               id="email"
//               type="name"
//               name="name"
//               placeholder="Enter your name"
//             />
//           </Form.Group>
//           <Form.Group className="me-3" controlId="formBasicEmail">
//             <Form.Label htmlFor="email">Email address</Form.Label>
//             <Form.Control type="email" placeholder="Enter your email" />
//             <Form.Text className="text-muted">
//               We'll never share your email with anyone else.
//             </Form.Text>
//           </Form.Group>
//         </div>
//         <Form.Group className="mb-3" controlId="formBasicSubject">
//           <Form.Label>Subject</Form.Label>
//           <Form.Control
//             type="text"
//             placeholder="Enter the subject of your message"
//           />
//         </Form.Group>
//         <Form.Group className="mb-3" controlId="formBasicMessage">
//           <Form.Label>Message</Form.Label>
//           <Form.Control
//             id="message"
//             name="message"
//             as="textarea"
//             rows={3}
//             placeholder="Enter your message"
//           />
//         </Form.Group>
//         <Button variant="primary" type="submit">
//           Submit
//         </Button>
//       </Form>

//       {/* Modal component to display the success message */}
//       <Modal show={showModal} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Success!</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           Thank you! We received your submission. We will get back to you as soon
//           as possible.
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// }

// export default FormContact;


import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useForm } from "@formcarry/react";

import "./Contact.css";

function FormContact() {
  const { state, submit } = useForm({
    id: "JqqxnckAco",
  });
  const [showModal, setShowModal] = useState(false);

  // Function to handle the modal close event
  const handleClose = () => setShowModal(false);

  // Function to handle the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!navigator.onLine) {
      alert('You are currently offline. Please check your internet connection.');
      return;
    }
    await submit(e);
    setShowModal(true);
    e.target.reset(); // Reset the form after submission
  };

  return (
    <div>
      <Form className="form-contact" onSubmit={handleSubmit}>
        <div className="d-flex mb-3">
          <Form.Group
            style={{ width: "50%" }}
            className="me-3"
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
          <Form.Group className="me-3" controlId="formBasicEmail">
            <Form.Label htmlFor="email">Email*</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" style={{ width:'20rem' }} required/>
            {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
          </Form.Group>
        </div>
        <Form.Group className="mb-3" controlId="formBasicSubject">
          <Form.Label>Subject*</Form.Label>
          <Form.Control
            type="text"
            name="subject"
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
            style={{ width:'39rem' }} 
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="btn px-4 py-2 fs-5 mt-5 FormContactBtn">
          Submit
        </Button>
      </Form>

      {/* Modal component to display the success message */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Success!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Thank you! We received your submission. We will get back to you as soon
          as possible.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} className="FormContactBtn">
            Close
          </Button>
          {/* <button className="btn px-4 py-2 fs-5 mt-5 testimonialBtn">
              See All Testimonials
            </button> */}
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default FormContact;
