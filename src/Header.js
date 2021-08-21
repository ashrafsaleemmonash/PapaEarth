import './App.css';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import 'bootstrap/dist/css/bootstrap.min.css';



function Header() {
    return (
<div>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#home" className="navbarText">PapaEarth</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/"> Home</Nav.Link>
              <NavDropdown title="▶ Video Series " id="basic-nav-dropdown">
                <NavDropdown.Item href="/video">Introduction</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Energy</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Plastic</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Quiz !" id="basic-nav-dropdown">
                <NavDropdown.Item href="/quiz/0">Introduction</NavDropdown.Item>
                <NavDropdown.Item href="/quiz/1">Energy</NavDropdown.Item>
                <NavDropdown.Item href="/quiz/2">Plastic</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
</div>)}

export default Header;