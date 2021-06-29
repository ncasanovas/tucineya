import React, { useState } from "react";
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

  const onClickSearchLocality = async (e) => {
    e.target.reset();
    e.preventDefault();
    await axios
      .get(`http://localhost:4000/api/cines/${inputValue}`)
      .then((res) => {
        setResult(res.data[0]);
      })
      .catch((e) => {
        console.log(e);
      });
    setInputValue("");
  };

  return (
    <div className="row mt-4">
      <div className="col mb-3">
        <form className="mb-4" onSubmit={onClickSearchMovie}>
          <input
            type="text"
            placeholder="Busque por titulo"
            onChange={onChangeinput}
          />
          <button className="btn-primary">Buscar</button>
        </form>
        <form className="mt-4" onSubmit={onClickSearchLocality}>
          <input
            type="text"
            placeholder="Busque por localidad"
            onChange={onChangeinput}
          />
          <button className="btn-primary">Buscar</button>
        </form>
      </div>
      <div className="col">
        {result
          ? result.map((res, i) => {
              return (
                <div>
                  {res.idNombrePelicula}
                  {res.idLocalidad}
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};
