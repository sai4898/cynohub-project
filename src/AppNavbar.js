
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function AppNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img src='https://www.cynohub.com/wp-content/uploads/2020/10/Black-Technology-LinkedIn-316x96.png' style={{ width: '160px' }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} href="#Home">
              <h4>Home</h4>
            </Nav.Link>
            <Nav.Link eventKey={2} href="#academics">
              <h4>Academics</h4>
            </Nav.Link>
            <Nav.Link eventKey={2} href="#placement">
              <h4>Placements</h4>
            </Nav.Link>
            <h4><NavDropdown  title="UpSkilling" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>

            </NavDropdown>
            </h4>
            <Nav.Link eventKey={2} href="#contact">
              <h4>Contact</h4>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;