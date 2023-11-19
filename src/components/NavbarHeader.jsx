import { NavDropdown, Navbar, Nav, Container } from 'react-bootstrap';
import { CONFIG_LinkWhatsapp } from '../Constants'

const NavbarHeader = () => {
  const changeLanguage = (language) => {
    var languageSelect = document.querySelector("select.goog-te-combo");
    
    if(languageSelect !== null){
      languageSelect.value = language; 
      languageSelect.dispatchEvent(new Event("change"));
    }
  };

  return (
    <>
      <div id="navbar" className="gtt-header" style={{backgroundImage: "url('header-background.jpg')"}}>
        <Navbar collapseOnSelect expand="lg" className="gtt-navbar">
          <Container>
            <Navbar.Brand href="#home"><img src="logo-3.svg" className="gtt-logo"></img></Navbar.Brand>
            <NavDropdown title={
              <div className="gtt-languages-button" style={{backgroundImage:"url('icons/language-white.svg')"}}></div>
            } id="languages" className="gtt-languages">
              <NavDropdown.Item href="#" onClick={()=>changeLanguage('es')}>Espa&ntilde;ol</NavDropdown.Item>
              <NavDropdown.Item href="#" onClick={()=>changeLanguage('en')}>English</NavDropdown.Item>
            </NavDropdown>
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
          <div className="gtt-header-logo-container">
            <img src="header-glam-trip-travel.svg" className="gtt-header-img"></img>
            <a className="gtt-nav-whatsapp" href={CONFIG_LinkWhatsapp} target="_blank" rel="noreferrer">
              <img src="icons/whatsapp-white.svg"></img>
            </a>
          </div>
        </div>
      </div>
      <div className="gtt-header-white-shadow"></div>
    </>
  );
};

export default NavbarHeader;
