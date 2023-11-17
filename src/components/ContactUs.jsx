import { Col, Row } from "react-bootstrap";
import ContactForm from './ContactForm';
import { CONFIG_LinkWhatsapp, CONFIG_LinkFacebook, CONFIG_LinkLinkedin, CONFIG_LinkInstagram, CONFIG_LinkTwitter, CONFIG_Phone } from '../Constants'

const ContactUs = () => {
  return (
    <div id="ContactUs" className="gtt-section-container">
        <Row>
            <Col xs="12" md="5">
                <div className="gtt-section-title">
                    Cont&aacute;ctanos
                </div>
                <a className="gtt-contact-option" href={CONFIG_LinkWhatsapp} target="_blank" rel="noopener noreferrer">
                    <div className="gtt-button-circle-icon-black" style={{backgroundImage:"url('icons/whatsapp-white.svg')"}}></div>
                    {CONFIG_Phone}
                </a>
                <a className="gtt-contact-option" href={CONFIG_LinkFacebook} target="_blank" rel="noopener noreferrer">
                    <div className="gtt-button-circle-icon-black" style={{backgroundImage:"url('icons/facebook-white.svg')"}}></div>
                    Glam Trip Travel
                </a>
                <a className="gtt-contact-option" href={CONFIG_LinkLinkedin} target="_blank" rel="noopener noreferrer">
                    <div className="gtt-button-circle-icon-black" style={{backgroundImage:"url('icons/linkedin-white.svg')"}}></div>
                    Glam Trip Travel
                </a>
                <a className="gtt-contact-option" href={CONFIG_LinkInstagram} target="_blank" rel="noopener noreferrer">
                    <div className="gtt-button-circle-icon-black" style={{backgroundImage:"url('icons/instagram-white.svg')"}}></div>
                    Glam Trip Travel
                </a>
                <a className="gtt-contact-option" href={CONFIG_LinkTwitter} target="_blank" rel="noopener noreferrer">
                    <div className="gtt-button-circle-icon-black" style={{backgroundImage:"url('icons/twitter-white.svg')"}}></div>
                    Glam Trip Travel
                </a>
            </Col>
            <Col xs="12" md="7">
                <ContactForm />
            </Col>
        </Row>
    </div>
  );
};

export default ContactUs;