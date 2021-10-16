import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

export const Map = ({ movie }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="mt-2">
      <Button onClick={handleShow}>Mapa</Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {movie.nombre} - {movie.ubicacion}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            src={`https://embed.waze.com/iframe?zoom=14&lat=${movie.lat}&lon=${movie.long}&pin=1`}
            //src="https://www.waze.com/es-419/live-map/directions/argentina/buenos-aires/av.-corrientes-3247?place=ChIJ4eb9h4zKvJURpAz3-xBBbSw&utm_campaign=iframe_search&utm_medium=fullscreen_map&utm_source=direct_link"
            width="100%"
            height="520"
          ></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="button"
            variant="secondary btn-secondary"
            onClick={handleClose}
          >
            Volver
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
