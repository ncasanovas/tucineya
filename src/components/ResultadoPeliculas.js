import React, { useContext } from "react";

import { Trailer } from "./Trailer";
import { MovieContext } from "./MovieContext";
import { Map } from "./Map";
import { useHistory } from "react-router-dom";
import axios from "axios";

export const ResultadoPeliculas = () => {

  const { movies, setMovies, setIdCine, setIdSala, setButacas } =
    useContext(MovieContext);
  const history = useHistory();

  const peliculaSeleccionada = (movie) => {
    setMovies([movie]);
    setIdSala(movie.idNumeroSala);
    setIdCine(movie.idCine);
    setButacas(movie.butacas);

    console.log(movie);
    history.replace("/elegirButaca");
    /* await axios
      .post("http://localhost:4000/api/cines/sala", {
        //.post("https://tucineya.herokuapp.com/api/cines/sala", {
        idCine: idCine,
        idNombrePelicula: movie.idNombrePelicula,
      })
      .then((res) => {
        //console.log(res.data);
        //console.log(res.data.data[0][0].idNumeroSala);
        //setIdSala(res.data.idNumeroSala);
        //history.replace("/elegirButaca");
      }); */
  };

  /* const verDireccion = async (pelicula) => {
    await axios.post("http://localhost:4000/api/")
  } */

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
                  <div>
                    <h2 className="text-white">{movie.idCine}</h2>
                    <Trailer movie={movie} />
                  </div>
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

