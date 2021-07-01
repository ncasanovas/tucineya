import React, { useState } from "react";
import emailjs from 'emailjs-com';
import "../index.css";
import { Modal, Button } from "react-bootstrap";

export const Suscribirse = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  
  };
  const handleShow = () => setShow(true);

  function sendEmail(e) {
    e.preventDefault();    

    emailjs.sendForm('gmail', 'template_aw5uok9', e.target, 'user_LcLtCbtqDfh0IUE6zlGFi')
      .then((result) => {
            window.location.reload();
             
            alert("Gracias por suscribirte");
        }, (error) => {
          
          alert("La suscripción falló. Intentá nuevamente.");
      });
  }

  return (
    <div className="mt-2 ">
      <Button variant={"primary"} onClick={handleShow}>
        Suscribirse
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className="title-sub">Suscribite</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form className="contact-form" onSubmit={sendEmail}>
              <div className="contenedor-inputs">
                <input type="text" placeholder="Nombre" name="to_name"/>
                <input type="email" placeholder="Correo" name="to_email"/>
              </div>
              
              <input type="submit" className="btn-submit btn-primary"  value="Suscribirse"/>      
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary btn-secondary" onClick={handleClose}>
            Volver
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

