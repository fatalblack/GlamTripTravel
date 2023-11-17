import { useState } from "react";
import { Row, Col, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { CONFIG_EmailTo, CONFIG_EmailSenderUrl, CONFIG_EmailSenderToken } from '../Constants';
import Loader from './Loader';
import AlertDismissible from "./AlertDismissible";

const ContactForm = () => {
    const [showLoader, setShowLoader] = useState(false)
    const [alertShow, setAlertShow] = useState(false);
    const [alertVariant, setAlertVariant] = useState("danger");
    const [alertTitle, setAlertTitle] = useState("");
    const [alertMessage, setAlertMessage] = useState("");
    const alertCloseCallback = () => setAlertShow(false);

    const showAlert = (isError, errorMessage) => {
        if(isError === true){
            setAlertVariant("danger");
            setAlertTitle("¡Error al intentar enviar el email!");
            setAlertMessage(errorMessage);
        }else{
            setAlertVariant("success");
            setAlertTitle("¡Genial!");
            setAlertMessage("Se envió su consulta.");
        }

        setAlertShow(true);
    }

    const sendMail = (event) =>{
        event.preventDefault();
        event.stopPropagation();
        
        setShowLoader(true);

        const form = event.currentTarget;
        const fullname = form.fullname.value;
        const contact = form.contact.value;
        var message = "";

        form.message.value.split("\n").map(function(item) {
            message = message + item + "<br/>";
        });

        const mailRequest = {
            "token": CONFIG_EmailSenderToken,
            "to": CONFIG_EmailTo,
            "subject": "Consulta desde la web de Glam Trip Travel",
            "message": "Se realizó una nueva consulta.<br /><br /><strong>Nombre:</strong><br />"+fullname+"<br /><br /><strong>Teléfono / Mail:</strong><br />"+contact+"<br /><br /><strong>Mensaje:</strong><br />"+message
        };

        fetch(CONFIG_EmailSenderUrl, {
            mode: 'cors',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(mailRequest)
        }).then(function (response) {
            if (response.ok) {
                return response.json().then(res => {
                    if(res.Succeeded == true){
                        showAlert(false, "");

                        form.fullname.value = "";
                        form.contact.value = "";
                        form.message.value = "";
                    }else{
                        showAlert(true, res.Message);
                    }
                });
            }else{
                showAlert(true, response.statusText);
            }
        })
        .catch(function (error) {
            showAlert(true, error);
        }).finally(() => {
            setShowLoader(false);
        });
    }

    return (
        <>
            <Row>
                <Col xs="0" md="2"></Col>
                <Col xs="12" md="8" className="gtt-form">
                    <div className="gtt-form-title">Formulario</div>
                    <Form onSubmit={ sendMail }>
                        <Form.Group className="gtt-for-row" controlId="fullname">
                            <Form.Label className="gtt-form-label">Nombre</Form.Label>
                            <Form.Control type="text" placeholder="" className="gtt-form-input" required />
                        </Form.Group>
                        <Form.Group className="gtt-for-row" controlId="contact">
                            <Form.Label className="gtt-form-label">Tel&eacute;fono / Email</Form.Label>
                            <Form.Control type="text" placeholder="" className="gtt-form-input" required />
                        </Form.Group>
                        <Form.Group className="gtt-for-row" controlId="message">
                            <Form.Label className="gtt-form-label">Mensaje</Form.Label>
                            <Form.Control as="textarea" rows={3} className="gtt-form-input" required />
                        </Form.Group>
                        <Button type="submit" className="gtt-button-submit">Saber m&aacute;s</Button>
                        <AlertDismissible show={alertShow} variant={alertVariant} title={alertTitle} message={alertMessage} closeCallback={alertCloseCallback} />
                    </Form>
                </Col>
                <Col xs="0" md="2"></Col>
            </Row>
            <Loader show={showLoader} />
        </>
    );
};

export default ContactForm;
