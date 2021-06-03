import React, { useContext, useState } from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";
import { useHistory } from "react-router";
import { MoviesContext } from "./MoviesContext";

export const MovieCard = ({ movie }) => {
  const history = useHistory();

  const onClickAddMovie = async () => {
    await axios
      .put("http://localhost:4000/api/movies/", movie)
      .then((data) => {
        alert(data.data.message);
        history.go(0);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="mb-3">
      <div className="d-flex justify-content-center">
        <Card className="row g-0 ">
          <div className="col-md-4">
            <Card.Img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            />
          </div>
          <div className="col-md-8">
            <Card.Body>
              <Card.Title>{movie.title}</Card.Title>
              <Card.Text>
                <b>Voto Promedio:</b> {movie.vote_average}
              </Card.Text>
              <Card.Text>
                <b>Fecha de estreno:</b> {movie.release_date}
              </Card.Text>
            </Card.Body>
            <Button variant="primary" onClick={onClickAddMovie}>
              Agregar Pelicula
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};
