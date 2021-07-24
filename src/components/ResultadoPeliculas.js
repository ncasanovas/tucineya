import React, { useContext } from "react";

import { Trailer } from "./Trailer";
import { MovieContext } from "./MovieContext";
import { Map } from "./Map";
import { useHistory } from "react-router-dom";
import axios from "axios";

export const ResultadoPeliculas = () => {
  const { movies, setMovies, idCine, setIdSala } = useContext(MovieContext);
  const history = useHistory();

  const peliculaSeleccionada = async (movie) => {
    setMovies([movie]);
    await axios
      .post("http://localhost:4000/api/cines/sala", {
        idCine: idCine,
        idNombrePelicula: movie.idNombrePelicula,
      })
      .then((res) => {
        setIdSala(res.data.idNumeroSala);
        history.replace("/elegirButaca");
      });
  };

  return (
    <div className="row">
      {movies.length !== 0 ? (
        <div>
          <div className="d-flex">
            {movies.map((movie, i) => {
              return (
                <div key={i}>
                  <div className="d-flex justify-content-center mb-2">
                    <img
                      src={movie.posterPelicula}
                      alt={movie.idNombrePelicula}
                      className="d-block w-75"
                      onDoubleClick={() => peliculaSeleccionada(movie)}
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                  <Trailer movie={movie} />
                </div>
              );
            })}
          </div>
          <Map />
        </div>
      ) : null}
    </div>
  );
};
