import React, { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { AddMovie } from "./AddMovie";
import { MoviesContext } from "./MoviesContext";
import axios from "axios";
import { useHistory } from "react-router";

export const AdminMovies = () => {
  const { moviesContext } = useContext(MoviesContext);

  const history = useHistory();
  const onClickDeleteMovie = async (nombrePelicula) => {
    await axios
      .delete(`http://localhost:4000/api/movies/${nombrePelicula}`)
      .then(() => {
        history.go(0);
      });
  };

  return (
    <div>
      <div>
        {moviesContext ? (
          <div className="overflow-auto" style={{ height: "350px" }}>
            {moviesContext.map((movie, i) => {
              return (
                <div className="col" key={i}>
                  <Card>
                    <Card.Img
                      className="img-fluid"
                      id="imgPelicula"
                      variant="top"
                      src={movie.posterPelicula}
                    />
                    <div>
                      <div className="d-flex justify-content-center">
                        <Card.Body>
                          <Card.Title id="cardText">
                            {movie.nombrePelicula}
                          </Card.Title>
                          <Card.Text style={{ fontSize: "16px" }}>
                            {movie.sinopsis === ""
                              ? "Sinopsis no disponible"
                              : movie.sinopsis}
                          </Card.Text>
                        </Card.Body>
                      </div>
                      <div>
                        <Button
                          className="btn btn-danger"
                          onClick={() =>
                            onClickDeleteMovie(movie.nombrePelicula)
                          }
                        >
                          Eliminar
                        </Button>
                      </div>
                    </div>
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
      {moviesContext ? <AddMovie /> : null}
    </div>
  );
};
