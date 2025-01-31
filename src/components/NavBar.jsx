import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import {Link} from 'react-router';

function NavBar() {
  return (
  <Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand to="/" as={Link}>Tienda-curso</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link to="/tipo/Agua" as={Link}>Agua</Nav.Link>
        <Nav.Link to="/tipo/Hierba" as={Link}>Hierba</Nav.Link>
        <Nav.Link to="/tipo/Fuego" as={Link}>Fuego</Nav.Link>
      </Nav>
     <CartWidget />
     
    </Container>
  </Navbar>
  );
}

export default NavBar;