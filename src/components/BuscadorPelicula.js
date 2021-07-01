import React, { useState, useEffect } from "react";
import { HashRouter, Link } from "react-router-dom";
import axios from "axios";

import { Trailer } from "./Trailer";
import { ElegirCine } from "./ElegirCine";

export const BuscadorPelicula = () => {
  const [inputValue, setInputValue] = useState();
  const [result, setResult] = useState();
  const [localidades, setLocalidades] = useState();

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

  return (
    <div className="row mt-4">
      <div className="d-flex justify-content-end">
        <HashRouter>
          <Link to="/" className="col-2 align-items-center">
            Atras
          </Link>
        </HashRouter>
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
