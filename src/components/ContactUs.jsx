import React from "react";
import { Col, Row } from "react-bootstrap";
import ContactForm from './ContactForm';
import { CONFIG_LinkWhatsapp, CONFIG_LinkFacebook, CONFIG_LinkLinkedin, CONFIG_LinkInstagram, CONFIG_LinkTwitter } from '../Constants'

const ContactUs = () => {
  return (
    <div id="ContactUs" className="gtt-section-container">
        <Row>
            <Col xs="12" md="5">
                <div className="gtt-section-title">
                    Cont&aacute;ctanos
                </div>
                <a className="gtt-contact-option" href={CONFIG_LinkWhatsapp} target="_blank" rel="noopener noreferrer">
                    <div className="gtt-button-circle-icon-black whatsapp"></div>
                    38 6960302
                </a>
                <a className="gtt-contact-option" href={CONFIG_LinkFacebook} target="_blank" rel="noopener noreferrer">
                    <div className="gtt-button-circle-icon-black facebook"></div>
                    Glam Trip Travel
                </a>
                <a className="gtt-contact-option" href={CONFIG_LinkLinkedin} target="_blank" rel="noopener noreferrer">
                    <div className="gtt-button-circle-icon-black linkedin"></div>
                    Glam Trip Travel
                </a>
                <a className="gtt-contact-option" href={CONFIG_LinkInstagram} target="_blank" rel="noopener noreferrer">
                    <div className="gtt-button-circle-icon-black instagram"></div>
                    Glam Trip Travel
                </a>
                <a className="gtt-contact-option" href={CONFIG_LinkTwitter} target="_blank" rel="noopener noreferrer">
                    <div className="gtt-button-circle-icon-black twitter"></div>
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