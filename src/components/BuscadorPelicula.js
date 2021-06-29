import React, { useState } from "react";
import { HashRouter, Link } from "react-router-dom";
import axios from "axios";

export const BuscadorPelicula = () => {
  const [inputValue, setInputValue] = useState();
  const [result, setResult] = useState();

  const onChangeinput = (e) => {
    setInputValue(e.target.value);
  };

  const onClickSearchMovie = async (e) => {
    e.target.reset();
    e.preventDefault();
    await axios
      .get(`http://localhost:4000/api/movies/${inputValue}`)
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
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};
