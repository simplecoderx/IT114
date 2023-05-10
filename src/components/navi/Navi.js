import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Navigation.css';
import logo from './../images/logo-color-removebg.png'

function Navi() {
  return (
    <>
      <Navbar expand="lg" className='navigation'>
        <Container fluid>
          <Navbar.Brand href="#"><img className='logo' src={logo}/></Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} className='navtoggle' />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="end"
            className="navMenu"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`} className='toggleTitle'>
                HINLO Services
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className='offCanvas'>
              <Nav className="justify-content-end flex-grow-1 pe-3 navLinks">
                <Nav.Link className='nav-item' href="#hero-carousel" spy={true} smooth={true} offset={-150} duration={500}>HOME</Nav.Link>
                <Nav.Link className='nav-item' href="#services" spy={true} smooth={true} offset={-150} duration={500}>SERVICES</Nav.Link>
                <Nav.Link className='nav-item' href="#portfolio" spy={true} smooth={true} offset={-150} duration={500}>PORTFOLIO</Nav.Link>
                <Nav.Link className='nav-item' href="#plans" spy={true} smooth={true} offset={-150} duration={500}>PRICING PLANS</Nav.Link>
                <Nav.Link className='nav-item' href="#testimonials" spy={true} smooth={true} offset={-150} duration={500}>TESTIMONIAL</Nav.Link>
                <Nav.Link className='nav-item' href="#faq" spy={true} smooth={true} offset={-150} duration={500}>FAQ</Nav.Link>
                <Nav.Link className='nav-item' href="#about" spy={true} smooth={true} offset={-150} duration={500}>ABOUT US</Nav.Link>
                <Nav.Link className='nav-item' href="#contact" spy={true} smooth={true} offset={-150} duration={500}>CONTACT US</Nav.Link>
                <Button href="#plans" className="getStartedBtn no-underline" spy={true} smooth={true} offset={-150} duration={500}>
                  Get Started
                </Button>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default Navi;
