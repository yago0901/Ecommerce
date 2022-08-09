import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Car from '../../assets/imagens/cart4.svg';
import logo from '../../assets/imagens/logo-alienware.png'

export default function NavScrollExample() {
  return (
    <Navbar bg="primary" expand="lg"  >
      <Container fluid>
        <Navbar.Brand href="#">
        <img src={logo} alt="Logo" width="36px" color='white' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          
          <Nav.Link href="#action1">Início</Nav.Link>
          <Nav.Link href="#action2">Checkout </Nav.Link>     
          
          </Nav>
          
          <a href='#'>
            <span className="badge rounded-pill bg-light text-danger position-absolute ms-4 mt-0">
              <small>4</small>
            </span>
            <img src={Car} alt="Logo" width="36px" color='white' />
          </a>
          
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
