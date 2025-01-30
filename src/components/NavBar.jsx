import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import { Link, NavLink } from 'react-router';

function NavBar () {
  return (
  <Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand to="/" as={Link}>Tienda-curso</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link to="/category/premium" as={Link}>Premium</Nav.Link>
        <Nav.Link to="/category/varios" as={Link}>varios</Nav.Link>
        <CartWidget />
      </Nav>
      
    </Container>
  </Navbar>
  );
}

export default NavBar;