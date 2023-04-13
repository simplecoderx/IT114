import React, { useState } from 'react';
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './Plans.css';
import { Button } from "react-bootstrap";
import cleaningcart from "./images/cleaning-cart.png";
import cleaningservice from "./images/cleaning-service.png";
import house from "./images/house.png";
// import tick from "./images/tick.png";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import PopupForm from './PopupForm';
function Plans() {
  
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    chosenplan:'',
    message: '',
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
      await axios.post(
        'https://formcarry.com/s/JqqxnckAco',
        formData,
        {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            // 'formcarry-key': 'YOUR_FORMCARRY_API_KEY',
          },
        }
      );
      setFormSubmitStatus({ submitting: false, error: false, success: true });
    } catch (error) {
      setFormSubmitStatus({ submitting: false, error: true, success: false });
    }
  };

  return (
    <div className="plansDivider" id="plans">
      <div className="plans-container">
        <h6 className="lines"> Pricing Plans</h6>
        <h1 className="bordered-text">
          Affordable <span className="non-bordered-text">Plans</span>
        </h1>
        <div className="shortDescription">
          <h6>
            Experience the best value for your money with our affordable pricing
            plans!
          </h6>
          <h6>
            From messy to spotless, we've got what it takes to make it happen.
          </h6>
        </div>
      </div>
      <Row>
        <Col className="colcards">
          <Card className="planCards">
            <Card.Body>
              <img className="logoplans" src={cleaningcart} alt="logoplans" />
              <h6 className="pesoSign">₱</h6>
              <Card.Title className="price">
                299<span className="perproj">/Per Project</span>
              </Card.Title>
              <Card.Subtitle className="mb-2 starterplan">
                | Starter Plan
              </Card.Subtitle>
              <h6 className="underline">__________________________</h6>
              <Card.Text>
                <div className="plantext">
                  <ul>
                    <li>
                      <span class="item-text">Dusting</span>
                      <span class="checkmark">&#10003;</span>
                    </li>
                    <li>
                      <span class="item-text">Vacuuming</span>
                      <span class="checkmark">&#10003;</span>
                    </li>
                    <li>
                      <span class="item-text">Sweeping</span>
                      <span class="checkmark">&#10003;</span>
                    </li>
                    <li>
                      <span class="item-text">Mopping</span>
                      <span class="checkmark">&#10003;</span>
                    </li>
                    <li>
                      <span class="item-text">Cleaning 1 Bathroom</span>
                      <span class="checkmark">&#10003;</span>
                    </li>
                  </ul>
                </div>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
            {/* <Button className="planbutton" onClick={handleShow}>
                Click Here
              </Button> */}
              <PopupForm 
              className="planbutton"
              planName="Starter"
              planDescription="Description of the starter plan."
              buttonLabel="Click Here"
              />
            </Card.Footer>
          </Card>
        </Col>
        <Col className="colcards slideInUp">
          <Card className="planCards">
            <Card.Body>
              <img className="logoplans" src={cleaningservice} alt="logoplans" />
              <h6 className="pesoSign">₱</h6>
              <Card.Title className="price">
                499<span className="perproj">/Per Project</span>
              </Card.Title>
              <Card.Subtitle className="mb-2 starterplan">
                | Pro Plan
              </Card.Subtitle>
              <h6 className="underline">__________________________</h6>
              <Card.Text>
                <div className="plantext">
                  <ul>
                    <li>
                      <span class="item-text">Starter Plan services plus:</span>
                      <span class="checkmark">&#10003;</span>
                    </li>
                    <li>
                      <span class="item-text">Cleaning 2 Bathrooms</span>
                      <span class="checkmark">&#10003;</span>
                    </li>
                    <li>
                      <span class="item-text">Cleaning the kitchen</span>
                      <span class="checkmark">&#10003;</span>
                    </li>
                    <li>
                      <span class="item-text">Cleaning mirrors and glass surfaces</span>
                      <span class="checkmark">&#10003;</span>
                    </li>
                  </ul>
                </div>
              </Card.Text>
              {/* <Button className="planbutton" variant="primary">
                Click Here
              </Button> */}
            </Card.Body>
            <Card.Footer>
            {/* <Button className="planbutton" onClick={handleShow}>
                Click Here
              </Button> */}
              <PopupForm 
              className="planbutton"
              planName="Pro"
              planDescription="Description of the pro plan."
              buttonLabel="Click Here"
              />
            </Card.Footer>
          </Card>
        </Col>
        <Col className="colcards">
          <Card className="planCards">
            <Card.Body>
              <img className="logoplans" src={house} alt="logoplans" />
              <h6 className="pesoSign">₱</h6>
              <Card.Title className="price">
                999<span className="perproj">/Per Project</span>
              </Card.Title>
              <Card.Subtitle className="mb-2 starterplan">
                | Ultimate Plan
              </Card.Subtitle>
              <h6 className="underline">__________________________</h6>
              <Card.Text>
                <div className="plantext">
                  <ul>
                    <li>
                      <span class="item-text">Pro Plan services, plus:</span>
                      <span class="checkmark">&#10003;</span>
                    </li>
                    <li>
                      <span class="item-text">All bedrooms & Common areas</span>
                      <span class="checkmark">&#10003;</span>
                    </li>
                    <li>
                      <span class="item-text">Dusting blinds and window sills</span>
                      <span class="checkmark">&#10003;</span>
                    </li>
                    <li>
                      <span class="item-text">Baseboards and crown moldings</span>
                      <span class="checkmark">&#10003;</span>
                    </li>
                    <li>
                      <span class="item-text">Oven and fridge (if requested)</span>
                      <span class="checkmark">&#10003;</span>
                    </li>
                    <li>
                      <span class="item-text">Folding laundry and changing bed linens (if requested)</span>
                      <span class="checkmark">&#10003;</span>
                    </li>
                  </ul>
                </div>
              </Card.Text>
              {/* <Button className="planbutton" variant="primary">
                Click Here
              </Button> */}
            </Card.Body>
            <Card.Footer>
            {/* <Button className="planbutton" onClick={handleShow}>
                Click Here
              </Button> */}
              <PopupForm 
              className="planbutton"
              planName="Ultimate"
              planDescription="Description of the ultimate plan."
              buttonLabel="Click Here"
              />
            </Card.Footer>
          </Card>
        </Col>
      </Row>

      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
            <Form.Group className="mb-3" controlId="exampleForm.ControlSelect1">
              <Form.Label>Select an option</Form.Label>
              <Form.Select>
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </Form.Select>
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
              <p className="text-danger">There was an error submitting the form. Please try again later.</p>
            )}
            {formSubmitStatus.success && (
              <p className="text-success">Thank you for your submission!</p>
            )}
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit" disabled={formSubmitStatus.submitting}>
              {formSubmitStatus.submitting ? 'Submitting...' : 'Submit'}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Plans;
