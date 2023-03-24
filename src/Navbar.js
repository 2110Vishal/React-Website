import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

function ColorSchemesExample() {
  return (
    <>
      <div className='container-fluid nav_bg'>
        <div className='row'>
          <div className='col-10 mx'>
            <Navbar bg="light" variant="light">
              <Container>
              <Navbar.Brand className='navbar-nav' href="#home">TECH ZONE</Navbar.Brand>
              <Nav className="ml-auto mb-2 mb-lg-0">
              <NavLink activeClassName = 'menu_active'  className='nav' to="/">Home</NavLink>
              <NavLink activeClassName = 'menu_active' className='nav' to="/service">Service</NavLink>
              <NavLink activeClassName = 'menu_active' className='nav' to="/about">About</NavLink>
              <NavLink activeClassName = 'menu_active' className='nav' to="/contact">Contact</NavLink>
              </Nav>
              </Container>
            </Navbar>
          </div>

        </div>

      </div>
    </>
  );
}

export default ColorSchemesExample;