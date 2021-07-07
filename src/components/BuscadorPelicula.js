import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import { AuthContext } from "../auth/AuthContext";
import { types } from "../types/types";
import { Trailer } from "./Trailer";
import { ElegirCine } from "./ElegirCine";

export const BuscadorPelicula = () => {
  const [inputValue, setInputValue] = useState();
  const [result, setResult] = useState();
  const [localidades, setLocalidades] = useState();
  const { dispatch } = useContext(AuthContext);
  const history = useHistory();

  useEffect(async () => {
    await axios
      //.get("http://localhost:4000/api/cines/")
      .get("https://tucineya.herokuapp.com/api/cines/")
      .then((res) => {
        setLocalidades(res.data[0]);
      });
  }, []);

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
        setResult(res.data.data[0]);
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
        <button className="nav-item nav-link btn" onClick={handleLogout}>
          Log Out
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
          <ElegirCine localidades={localidades} />
        </div>
      </div>
      <div className="col d-flex">
        {result
          ? result.map((res, i) => {
              return (
                <div key={i}>
                  <img
                    src={res.posterPelicula}
                    alt={res.idNombrePelicula}
                    className="d-block w-75"
                  />
                  <Trailer movie={res} />
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};
