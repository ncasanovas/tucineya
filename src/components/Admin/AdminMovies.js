import React, { useState, useEffect } from "react";
import { SearchMovie } from "./SearchMovie";
import axios from "axios";

export const AdminMovies = () => {
  const [movies, setMovies] = useState();

  useEffect(async () => {
    await axios
      .get("https://tucineya.herokuapp.com/api/movies/")
      //.get("http://localhost:4000/api/movies/")
      .then((res) => {
        setMovies(res.data[0]);
      });
  });

  const onClickDeleteMovie = async (idNombrePelicula) => {
    await axios
      //.delete(`http://localhost:4000/api/movies/${idNombrePelicula}`)
      .delete(`https://tucineya.herokuapp.com/api/movies/${idNombrePelicula}`)
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
        {movies ? (
          <div
            id="withContext"
            className="overflow-auto d-flex container p-2"
            style={{ height: "350px", width: "auto" }}
          >
            <div className="row row-cols-3 row-cols-lg-5 row-cols-md-4 g-2 g-lg-3">
              {movies.map((movie, i) => {
                return (
                  <div key={i}>
                    <div>
                      <img
                        src={movie.posterPelicula}
                        className="card-img-top"
                        alt={movie.idNombrePelicula}
                      />
                      <div className="card-body p-0 ">
                        <div className="d-flex justify-content-center  m-2">
                          <h6 className="card-title">
                            {movie.idNombrePelicula}
                          </h6>
                        </div>
                        <div>
                          <button
                            className="btn btn-danger "
                            onClick={() =>
                              onClickDeleteMovie(movie.idNombrePelicula)
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
      {movies ? <SearchMovie /> : null}
    </div>
  );
};
