import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Navi() {
  return (
    <>
              <Navbar expand="lg" className="myNav mb-3">
        <Container fluid className='navCon'>
        <Navbar.Brand href="/"><img src={} alt="Logo" width="50" height="50" className="ml-auto d-inline-block logo"/>Paradise Beauty</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" className='toggle'/>
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-lg"
            aria-labelledby="offcanvasNavbarLabel-expand-lg"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className=''>
            <div className="search-bar-container mr-auto">
              {/* <FontAwesomeIcon icon={faSearch} className="search-icon" /> */}
              <input type="text" placeholder="Search..." className="search-input mx-auto" />
            </div>
              <Nav className="navbtn justify-content-end ml-auto flex-grow-1 pe-3">
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Destinations</Nav.Link>
                <Nav.Link href="#action1">About</Nav.Link>
                <Nav.Link href="#action2">Contact</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default Navi;