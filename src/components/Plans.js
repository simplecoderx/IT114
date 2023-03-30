import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Plans.css";
import { Button } from "react-bootstrap";
import cleaningcart from "./images/cleaning-cart.png";
import cleaningservice from "./images/cleaning-service.png";
import house from "./images/house.png";
import tick from "./images/tick.png";
function Plans() {
  return (
    <div className="plansDiv" id="plans">
      <div className="plans-container">
        <h6 className="hr-lines"> Pricing Plans</h6>
        <h1 className="bordered-text">
          Afforable <span className="non-bordered-text">Plans</span>
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
            <Button className="planbutton">
                Click Here
              </Button>
            </Card.Footer>
          </Card>
        </Col>
        <Col className="colcards">
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
                      <span class="item-text">Basic Plan services plus:</span>
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
            <Button className="planbutton">
                Click Here
              </Button>
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
                      <span class="item-text">Standard Plan services, plus:</span>
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
                      <span class="item-text">oven and fridge (if requested)</span>
                      <span class="checkmark">&#10003;</span>
                    </li>
                    <li>
                      <span class="item-text">olding laundry and changing bed linens (if requested)</span>
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
            <Button className="planbutton">
                Click Here
              </Button>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Plans;
