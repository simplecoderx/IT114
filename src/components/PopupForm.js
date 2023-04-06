// import React, { useState } from 'react';
// import './PopupForm.css';

// function PopupForm() {
//   const [isPopupOpen, setIsPopupOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const handleInputChange = event => {
//     setFormData({
//       ...formData,
//       [event.target.name]: event.target.value,
//     });
//   };

//   const handleSubmit = event => {
//     event.preventDefault();
//     // Send form data to server or perform any other action
//     setIsPopupOpen(false);
//   };

//   return (
//     <div className="popup-form">
//       <button onClick={() => setIsPopupOpen(true)}>Open Form</button>
//       {isPopupOpen && (
//         <div className="popup-form-overlay">
//           <div className="popup-form-content">
//             <h2>Contact Us</h2>
//             <form onSubmit={handleSubmit}>
//               <label htmlFor="name">Name:</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleInputChange}
//               />
//               <label htmlFor="email">Email:</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleInputChange}
//               />
//               <label htmlFor="message">Message:</label>
//               <textarea
//                 name="message"
//                 value={formData.message}
//                 onChange={handleInputChange}
//               ></textarea>
//               <button type="submit">Send</button>
//               <button onClick={() => setIsPopupOpen(false)}>Cancel</button>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default PopupForm;

// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Modal from 'react-bootstrap/Modal';

// function PopupForm() {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <>
//       <Button variant="primary" onClick={handleShow}>
//         Launch demo modal
//       </Button>

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Modal heading</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//               <Form.Label>Email address</Form.Label>
//               <Form.Control
//                 type="email"
//                 placeholder="name@example.com"
//                 autoFocus
//               />
//             </Form.Group>
//             <Form.Group
//               className="mb-3"
//               controlId="exampleForm.ControlTextarea1"
//             >
//               <Form.Label>Example textarea</Form.Label>
//               <Form.Control as="textarea" rows={3} />
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleClose}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

// export default PopupForm;

import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import './PopupForm.css';

function PopupForm(props) {
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    chosenplan: "",
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

  const resetForm = () => {
    setFormData({ name: "", email: "", message: "" });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormSubmitStatus({ submitting: true, error: false, success: false });
    try {
      await axios.post("https://formcarry.com/s/JqqxnckAco", formData, {
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
            {/* <Form.Group className="mb-3" controlId="name">
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
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </Form.Group> */}
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
            <Form.Group className="mb-3" controlId="chosenplan">
              <Form.Label>Chosen Plan</Form.Label>
              <Form.Control
                placeholder={props.planName}
                type="text"
                name="chosenplan"
                value={formData.planName}
                disabled
              />
            </Form.Group>

            {/* NAME AND EMAIL WERE PLACED SIDE BY SIDE */}

            {/* <div className="row">
    <div className="col">
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
    </div>
    <div className="col">
      <Form.Group className="mb-3" controlId="email">
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
    </div>
  </div> */}
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

      {/* asdadad asssssssssssssssssssssssssssss*/}

      {/* <Button variant="primary" onClick={handleShow}>
        {props.buttonLabel}
      </Button>

      <Modal show={show} onHide={handleClose}>
      <h1>Client Subscription</h1>
        <Modal.Header closeButton>
          <Modal.Title>{props.planName} Plan</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{props.planDescription}</p>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlSelect1">
              <Form.Label>Select an option</Form.Label>
              <Form.Select>
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </Form.Select>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal> */}
    </>
  );
}

export default PopupForm;
