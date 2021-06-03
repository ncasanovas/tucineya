import React, { useState } from "react";
import axios from "axios";

import { Modal, Button, Accordion, Card, Carousel } from "react-bootstrap";
import { useHistory } from "react-router";
import { MovieCard } from "./MovieCard";

export const AddMovie = () => {
  const [show, setShow] = useState(false);
  const [inputValue, setInputValue] = useState();
  const [movieResult, setMovieResult] = useState();

  const history = useHistory();

  const handleClose = () => {
    setShow(false);
    setInputValue("");
    setMovieResult();
  };
  const handleShow = () => setShow(true);

  const onChangeinput = (e) => {
    setInputValue(e.target.value);
  };

  const onClickSearchMovie = async () => {
    await axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=350f655333437185ccf33d95346bf8e6&language=en-US&query=${inputValue}&page=1&include_adult=false`
      )
      .then((res) => {
        setMovieResult(res.data.results);
      })
      .catch((e) => {
        console.log(e);
      });
  };

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
          <div className="mb-3">
            <input
              type="text"
              placeholder="Busque por titulo"
              onChange={onChangeinput}
            />

            <Button
              variant="secondary btn-secondary"
              onClick={onClickSearchMovie}
            >
              Buscar
            </Button>
          </div>
          <div>
            {movieResult
              ? movieResult.map((movie, i) => {
                  return <MovieCard key={i} movie={movie} />;
                })
              : null}
          </div>
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
