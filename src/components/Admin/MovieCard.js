import React from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";

export const MovieCard = ({ movie }) => {
  const onClickAddMovie = async () => {
    await axios
      .post("http://localhost:4000/api/movies/", movie)
      //.post("https://tucineya.herokuapp.com/api/movies/", movie)
      .then((data) => {
        alert(data.data.message);
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
