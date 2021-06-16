import React, { useContext } from "react";
import { SearchMovie } from "./SearchMovie";
import { MoviesContext } from "../MoviesContext";
import axios from "axios";
import { useHistory } from "react-router";

export const AdminMovies = () => {
  const { moviesContext } = useContext(MoviesContext);

  const onClickDeleteMovie = async (nombrePelicula) => {
    await axios
      //.delete(`http://localhost:4000/api/movies/${nombrePelicula}`)
      .delete(`https://tucineya.herokuapp.com/api/movies/${nombrePelicula}`)
      .then((res) => {
        alert(res.data.message);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <div>
        {moviesContext ? (
          <div
            className="overflow-auto d-flex container p-2"
            style={{ height: "350px", width: "auto" }}
          >
            <div className="row row-cols-3 row-cols-lg-5 row-cols-md-4 g-2 g-lg-3">
              {moviesContext.map((movie, i) => {
                return (
                  <div key={i}>
                    <div>
                      <img
                        src={movie.posterPelicula}
                        className="card-img-top"
                        alt={movie.nombrePelicula}
                      />
                      <div className="card-body p-0 ">
                        <div className="d-flex justify-content-center  m-2">
                          <h6 className="card-title">{movie.nombrePelicula}</h6>
                        </div>
                        <div>
                          <button
                            className="btn btn-danger "
                            onClick={() =>
                              onClickDeleteMovie(movie.nombrePelicula)
                            }
                          >
                            Eliminar
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
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
      {moviesContext ? <SearchMovie /> : null}
    </div>
  );
};
