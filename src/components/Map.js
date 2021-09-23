import React, { useState, useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import { MovieContext } from "./MovieContext";

export const Map = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { movie, idCine } = useContext(MovieContext);
  return (
    <div className="mt-2">
      <Button onClick={handleShow}>{idCine}</Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{idCine}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            src="https://embed.waze.com/iframe?zoom=13&lat=-34.61&lon=-58.51&pin=1"
            //src="https://www.waze.com/es-419/live-map/directions/argentina/buenos-aires/av.-corrientes-3247?place=ChIJ4eb9h4zKvJURpAz3-xBBbSw&utm_campaign=iframe_search&utm_medium=fullscreen_map&utm_source=direct_link"
            width="100%"
            height="520"
          ></iframe>

          <a
            href="https://www.waze.com/es/live-map/directions/argentina/buenos-aires/devoto-shopping?utm_campaign=iframe_search&utm_medium=fullscreen_map&utm_source=http%3A%2F%2F127.0.0.1%3A5500&to=place.ChIJzYQmM9e3vJUROcWm37tV7tk"
            target="_blank"
            rel="noopener noreferrer"
          >
            CINE devoto
          </a>
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
