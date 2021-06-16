import React, { useState } from "react";
import axios from "axios";

import { Modal, Button } from "react-bootstrap";
import { useHistory } from "react-router";

export const DeleteUser = ({ deleteUsers, setDeleteUsers }) => {
  const [show, setShow] = useState(false);

  const history = useHistory();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = () => {
    if (deleteUsers.length !== 0) {
      deleteUsers.map(async (user) => {
        await axios
          .delete(
            `https://tucineya.herokuapp.com/api/users/${user}`
            //`http://localhost:4000/api/users/${user}`
          )
          .catch((e) => {
            console.log(e);
          });
      });
    }

    setDeleteUsers([]);
    handleClose();
    history.go(0);
  };

  return (
    <div className="mt-2">
      <Button
        variant={deleteUsers.length === 0 ? "primary disabled" : "primary"}
        onClick={handleShow}
      >
        Eliminar Usuario/s
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>¡Atencion!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          ¿Está seguro de querer eliminar los usuarios seleccionados?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary btn-secondary" onClick={handleClose}>
            Volver
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Eliminar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
