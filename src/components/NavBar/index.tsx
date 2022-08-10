import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Car from '../../assets/imagens/cart4.svg';

export default function NavScroll() {
  return (
    <Navbar bg="primary" expand="lg"  >
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >

            <Link to="/">
              <p style={{color: '#ffffff'}}>Início</p>
            </Link>
          </Nav>

          <Link to="/checkout">


            <span className="badge rounded-pill bg-light text-danger position-absolute ms-4 mt-0">
              <small>4</small>
            </span>
            <img src={Car} alt="Logo" width="36px" color='white' />
          </Link>


        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
