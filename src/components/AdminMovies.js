import React, { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { AddMovie } from "./AddMovie";
import { MoviesContext } from "./MoviesContext";

export const AdminMovies = () => {
  const { moviesContext } = useContext(MoviesContext);

  return (
    <div className="p-0 m-0">
      <div>
        {moviesContext ? (
          <div className="overflow-auto d-flex">
            {moviesContext.map((movie, i) => {
              return (
                <div className="col-4 overflow-auto d-flex" key={i}>
                  <Card>
                    <Card.Img
                      className="img-fluid"
                      id="imgPelicula"
                      variant="top"
                      src={`https://${movie.posterPelicula}`}
                    />
                    <Card.Body>
                      <Card.Title id="cardText">
                        {movie.nombrePelicula}
                      </Card.Title>
                      <Card.Text>{movie.sinopsis}</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="d-flex justify-content-center">
            <div
              className="spinner-border text-primary d-flex justify-content-center"
              role="status"
            >
              <span className="visually-hidden ">Loading...</span>
            </div>
          </div>
        )}
      </div>
      {moviesContext ? (
        <AddMovie />
      ) : //<Button variant="primary">Agregar Pelicula</Button>
      null}
    </div>
  );
};
