import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CONFIG_LinkWhatsapp } from '../Constants'

const NavbarHeader = () => {
  return (
    <>
      <div id="navbar" className="gtt-header" style={{backgroundImage: "url('header-background2.png')"}}>
        <Navbar collapseOnSelect expand="lg" className="gtt-navbar">
          <Container>
            <Navbar.Brand href="#home"><img src="logo-3.svg" className="gtt-logo"></img></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" className="custom-toggler" />
            <Navbar.Collapse id="responsive-navbar-nav" className="gtt-links justify-content-end">
              <Nav>
                <Nav.Link href="#Services">Servicios</Nav.Link>
                <Nav.Link href="#AboutUs">Sobre nosotros</Nav.Link>
                <Nav.Link href="#Testimonials">Testimonios</Nav.Link>
                <Nav.Link href="#ContactUs">
                  <div className="gtt-nav-contact">Contacto</div>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div>
          <div>
            <img src="header-glam-trip-travel.svg" className="gtt-header-img"></img>
          </div>
          <a className="gtt-nav-whatsapp" href={CONFIG_LinkWhatsapp} target="_blank" rel="noreferrer">
            <img src="icons/whatsapp-white.svg"></img>
          </a>
        </div>
      </div>
    </>
  );
};

export default NavbarHeader;
