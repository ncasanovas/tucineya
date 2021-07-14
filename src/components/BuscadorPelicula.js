import React, { useState, useContext } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import { AuthContext } from "../auth/AuthContext";
import { MovieContext } from "./MovieContext";

import { types } from "../types/types";
import { ResultadoPeliculas } from "./ResultadoPeliculas";
import { ElegirCine } from "./ElegirCine";

export const BuscadorPelicula = () => {
  const [inputValue, setInputValue] = useState();
  const { dispatch } = useContext(AuthContext);
  const { setMovies } = useContext(MovieContext);
  const history = useHistory();

  const onChangeinput = (e) => {
    setInputValue(e.target.value);
  };

  const onClickSearchMovie = async (e) => {
    e.target.reset();
    e.preventDefault();
    await axios
      //.get(`http://localhost:4000/api/movies/${inputValue}`)
      .get(`https://tucineya.herokuapp.com/api/movies/${inputValue}`)
      .then((res) => {
        setMovies(res.data.data[0]);
      })
      .catch((e) => {
        console.log(e);
      });
    setInputValue("");
  };

  const handleLogout = () => {
    dispatch({
      type: types.logout,
    });
    history.replace("./");
  };

  return (
    <div className="row mt-4">
      <div className="d-flex justify-content-end">
        <button
          className="nav-item nav-link btn white-text"
          onClick={handleLogout}
        >
          Cerrar Sesión
        </button>
      </div>
      <div className="col mb-3">
        <form className="mb-4" onSubmit={onClickSearchMovie}>
          <input
            type="text"
            placeholder="Busque por titulo"
            onChange={onChangeinput}
          />
          <button className="btn-primary">Buscar</button>
        </form>
        <div>
          <ElegirCine />
        </div>
      </div>
      <div className="col">{<ResultadoPeliculas />}</div>
    </div>
  );
};
