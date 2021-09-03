import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import { AuthContext } from "../auth/AuthContext";
import { MovieContext } from "./MovieContext";

import { types } from "../types/types";
import { ResultadoPeliculas } from "./ResultadoPeliculas";
import { ElegirCine } from "./ElegirCine";

export const BuscadorPelicula = () => {
  const [inputValue, setInputValue] = useState();
  const [user, setUser] = useState();
  const [localidades, setLocalidades] = useState();
  const { dispatch } = useContext(AuthContext);
  const { movies, setMovies } = useContext(MovieContext);
  const history = useHistory();

  const onChangeinput = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(async () => {
    let user = localStorage.getItem("usuario");
    setUser(user);
    await axios
      //.get("http://localhost:4000/api/cines/")
      .get("https://tucineya.herokuapp.com/api/cines/")
      .then((res) => {
        setLocalidades(res.data[0]);
      });
  }, [movies]);

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
    console.log("Click");
    dispatch({
      type: types.logout,
    });
    history.replace("./");
  };

  return (
    <div className="row mt-4">
      <div className="d-flex justify-content-end">
        <h4 style={{ color: "white" }}>Bienvenido {user}!</h4>
        <button
          className="nav-item nav-link btn white-text"
          onClick={() => handleLogout}
        >
          Cerrar Sesión
        </button>
      </div>
      <div className="col mb-3">
        <form className="mb-4" onSubmit={() => onClickSearchMovie()}>
          <input
            type="text"
            placeholder="Busque por titulo"
            onChange={onChangeinput}
          />
          <button className="btn-primary">Buscar</button>
        </form>
        <div id="IdDropdown">
          <ElegirCine localidades={localidades} />
        </div>
      </div>
      <div className="col">{movies ? <ResultadoPeliculas /> : null}</div>
    </div>
  );
};
