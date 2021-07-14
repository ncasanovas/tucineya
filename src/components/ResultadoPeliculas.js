import React, { useContext } from "react";

import { Trailer } from "./Trailer";
import { MovieContext } from "./MovieContext";
import { Map } from "./Map";

export const ResultadoPeliculas = () => {
  const { movies } = useContext(MovieContext);
  return (
    <div className="row">
      {movies.length !== 0 ? (
        <div>
          <div className="d-flex">
            {movies.map((movie, i) => {
              return (
                <div key={i}>
                  <img
                    src={movie.posterPelicula}
                    alt={movie.idNombrePelicula}
                    className="d-block w-75"
                  />
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
