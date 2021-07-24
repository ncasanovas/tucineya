import React, { useState } from "react";
import axios from "axios";

import DatePicker from "react-date-picker";

import { Modal, Button } from "react-bootstrap";
import { MovieCard } from "./MovieCard";
import { ElegirCineAdmin } from "./ElegirCineAdmin";

export const SearchMovie = () => {
  const [show, setShow] = useState(false);
  const [inputValue, setInputValue] = useState();
  const [movieResult, setMovieResult] = useState();
  const [peli, setPeli] = useState();
  const [idCine, setIdCine] = useState();
  const [value, onChange] = useState(new Date());

  const handleClose = () => {
    setShow(false);
    setInputValue("");
    setMovieResult();
    setPeli();
    setIdCine();
  };
  const handleShow = () => setShow(true);

  const agregarPelicula = async () => {
    await axios
      /* .post("http://localhost:4000/api/movies/", {
        titulo: peli.title,
        sinopsis: peli.overview,
        poster: peli.poster_path,
        idPelicula: peli.id,
        idCine: idCine,
        fecha: value,
      }) */
      .post("https://tucineya.herokuapp.com/api/movies/", {
        titulo: peli.title,
        sinopsis: peli.overview,
        poster: peli.poster_path,
        idPelicula: peli.id,
        idCine: idCine,
        fecha: value,
      })
      .then((data) => {
        alert(data.data.message);
      })
      .catch((e) => {
        console.log(e);
      });
  };

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
          {peli ? (
            <div className="row">
              <div className="col">
                <img
                  src={`https://image.tmdb.org/t/p/w300${peli.poster_path}`}
                  alt={peli.title}
                  className="imgPelicula"
                  onDoubleClick={() => setPeli()}
                />
              </div>
              <div className="col">
                <h4>Elige la fecha y el cine donde se estrena</h4>
                <DatePicker
                  onChange={onChange}
                  value={value}
                  className="mb-3"
                  format="y-MM-dd"
                />
                <ElegirCineAdmin setIdCine={setIdCine} />
              </div>
            </div>
          ) : (
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
          )}

          <div>
            {movieResult
              ? movieResult.map((movie, i) => {
                  return (
                    <MovieCard
                      key={i}
                      movie={movie}
                      setPeli={setPeli}
                      setMovieResult={setMovieResult}
                    />
                  );
                })
              : null}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary btn-secondary"
            onClick={() => {
              agregarPelicula();
            }}
          >
            Agregar Pelicula
          </Button>
          <Button variant="secondary btn-secondary" onClick={handleClose}>
            Volver
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
