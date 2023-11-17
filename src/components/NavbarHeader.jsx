import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Col, Row } from "react-bootstrap";

const NavbarHeader = () => {
  // Esto es una idea en desarrollo
  // // Este use State es para saber si el menu esta abierto o cerrado
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  // // Este useState es para detectar el tamaño de la pantalla
  // const [windowDimension, setWindowDimension] = useState({
  //   innerHeight: window.innerHeight,
  //   innerWidth: window.innerWidth,
  // });

  return (
    <>
      <div id="navbar" className="gtt-header" style={{backgroundImage: "url('header-background.jpg')"}}>
        <Navbar collapseOnSelect expand="lg" className="gtt-navbar">
          <Container>
            <Navbar.Brand href="#home"><img src="logo-3.svg" className="gtt-logo"></img></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="gtt-links justify-content-end">
              <Nav>
                <Nav.Link href="#Services">Servicios</Nav.Link>
                <Nav.Link href="#AboutUs">Sobre nosotros</Nav.Link>
                <Nav.Link href="#Testimonials">Testimonios</Nav.Link>
                <Nav.Link href="#ContactUs">Contacto</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className="container gtt-header-description">
          <Row className="w-100">
            <Col xs="0" md="3"></Col>
            <Col xs="12" md="6">
              <div className="text-left">
                <div>tu pr&oacute;xima aventura</div>
                <a className="gtt-button" href="#">
                  <img src="icons/whatsapp-white.svg" className="gtt-icon"></img>
                  Escribinos
                </a>
              </div>
            </Col>
            <Col xs="0" md="3"></Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default NavbarHeader;
