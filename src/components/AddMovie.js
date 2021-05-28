import React, { useState } from "react";
import axios from "axios";

import { Modal, Button } from "react-bootstrap";
import { useHistory } from "react-router";

export const AddMovie = () => {
  const [show, setShow] = useState(false);

  const history = useHistory();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="mt-2">
      <Button variant={"primary"} onClick={handleShow}>
        Agregar Pelicula
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Pelicula</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          ¿Está seguro de querer eliminar los usuarios seleccionados?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary btn-secondary" onClick={handleClose}>
            Volver
          </Button>
          <Button variant="danger">Eliminar</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
