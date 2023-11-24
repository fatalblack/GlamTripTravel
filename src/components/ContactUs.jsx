import { Col, Row } from "react-bootstrap";
import ContactForm from './ContactForm';
import { 
    CONFIG_LinkWhatsapp,
    CONFIG_TextWhatsapp,
    CONFIG_LinkFacebook,
    CONFIG_TextFacebook,
    CONFIG_LinkLinkedin,
    CONFIG_TextLinkedin,
    CONFIG_LinkInstagram,
    CONFIG_TextInstagram,
    CONFIG_LinkTwitter,
    CONFIG_TextTwitter,
    CONFIG_LinkTripAdvisor,
    CONFIG_TextTripAdvisor } from '../Constants'

const ContactUs = () => {
    const contacts = [
        {link: CONFIG_LinkWhatsapp, text: CONFIG_TextWhatsapp, imagePath: "icons/whatsapp-white.svg"},
        {link: CONFIG_LinkFacebook, text: CONFIG_TextFacebook, imagePath: "icons/facebook-white.svg"},
        {link: CONFIG_LinkLinkedin, text: CONFIG_TextLinkedin, imagePath: "icons/linkedin-white.svg"},
        {link: CONFIG_LinkInstagram, text: CONFIG_TextInstagram, imagePath: "icons/instagram-white.svg"},
        {link: CONFIG_LinkTripAdvisor, text: CONFIG_TextTripAdvisor, imagePath: "icons/tripadvisor-white.svg"}
    ];
  return (
    <div id="ContactUs" className="gtt-section-container">
        <Row>
            <Col xs="12" md="5">
                <div className="gtt-section-title">
                    Cont&aacute;ctanos
                </div>
                {
                    contacts.map((contact, index) => {
                        return(
                            <a key={"contact-"+index}
                                className="gtt-contact-option"
                                href={contact.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                translate="no">
                                <div className="gtt-button-circle-icon-black" style={{backgroundImage:"url('"+contact.imagePath+"')"}}></div>
                                {contact.text}
                            </a>
                        )
                    })
                }
            </Col>
            <Col xs="12" md="7">
                <ContactForm />
            </Col>
        </Row>
    </div>
  );
};

export default ContactUs;