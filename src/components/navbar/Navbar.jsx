import React from 'react'
import './navbar1.css'
import logo from '../../assets/logo.jpeg' ;
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

function OffcanvasExample() {
  return (
    <>
      {['md'].map((expand) => (
        <Navbar data-bs-theme="dark" sticky="top" key={expand} expand={expand} className='namess'>
          <Container fluid>
            <Navbar.Brand href="/">
            {/* <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              style={{borderRadius:'100%'}}
            />{' '} */}
              Inicio
              </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/abraham">Abraham Maslow</Nav.Link>
                  <Nav.Link href="/elton">Elton Mayo</Nav.Link>
                  <Nav.Link href="/mcgregor">Douglas Mcgregor</Nav.Link>
                  {/* <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown> */}
                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;