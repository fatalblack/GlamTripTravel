import React from "react";
import { Col, Row } from "react-bootstrap";

const ContactUs = () => {
  return (
    <div id="ContactUs" className="gtt-section-container">
        <Row>
            <Col xs="12" md="5">
                <div className="gtt-section-title">
                    Cont&aacute;ctanos
                </div>
                <a className="gtt-contact-option" href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
                    <div className="gtt-button-circle-icon-black whatsapp"></div>
                    38 6960302
                </a>
                <a className="gtt-contact-option" href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <div className="gtt-button-circle-icon-black facebook"></div>
                    Glam Trip Travel
                </a>
                <a className="gtt-contact-option" href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <div className="gtt-button-circle-icon-black linkedin"></div>
                    Glam Trip Travel
                </a>
                <a className="gtt-contact-option" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <div className="gtt-button-circle-icon-black instagram"></div>
                    Glam Trip Travel
                </a>
                <a className="gtt-contact-option" href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <div className="gtt-button-circle-icon-black twitter"></div>
                    Glam Trip Travel
                </a>
            </Col>
            <Col xs="12" md="7">
                <iframe className="gtt-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4644.399733276658!2d-58.38512171826689!3d-34.60197297317464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4aa9f0a6da5edb%3A0x11bead4e234e558b!2sObelisco!5e0!3m2!1ses!2sar!4v1699377890887!5m2!1ses!2sar" width="600" height="450" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </Col>
        </Row>
    </div>
  );
};

export default ContactUs;