import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useHistory, HashRouter, Link } from "react-router-dom";

import { AuthContext } from "../auth/AuthContext";
import { types } from "../types/types";
import { MovieContext } from "./MovieContext";

export const Butacas = () => {
  const asientosFila = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"];
  const filas = ["1", "2", "3", "4", "5", "6", "7"];
  const [butacaElegida, setButacaElegida] = useState([]);
  const [butacasConfirmadas, setButacasConfirmadas] = useState([]);
  const [confirmar, setConfirmar] = useState(false);
  const { dispatch } = useContext(AuthContext);
  const history = useHistory();
  const { movies, idSala } = useContext(MovieContext);

  useEffect(async () => {
    if (idSala !== null) {
      await axios
        //.get(`http://localhost:4000/api/butacas/${idSala}`)
        .get(`https://tucineya.herokuapp.com/api/butacas/${idSala}`)
        .then((res) => {
          if (res.data !== null) {
            if (
              res.data[0][0].butacas === "" ||
              res.data[0][0].butacas === null
            ) {
              localStorage.setItem("butacas", "");
              setButacasConfirmadas(localStorage.getItem("butacas"));
            } else {
              let butacas = res.data[0][0].butacas.split(",");
              localStorage.setItem("butacas", butacas);
              setButacasConfirmadas(butacas);
            }
          } else {
            setButacasConfirmadas(localStorage.getItem("butacas"));
          }
        });
    }
  }, [confirmar]);

  const seleccionarButaca = (fila, asiento) => {
    if (butacaElegida.includes(fila + asiento)) {
      // Si el asiento ya está seleccionado en el array
      let index = butacaElegida.indexOf(fila + asiento); // Guardo el indice en donde esté la butaca
      butacaElegida.splice(index, 1); // Y la borro del array segun el indice que encontró, el segundo argumento es para que borre solo ese registro
      setButacaElegida([...butacaElegida]); // setea las butacas con el array y ya sin la que borramos
    } else {
      setButacaElegida([...butacaElegida, fila + asiento]); // setea las butacas seleccionadas si no está en el array de butacaElegida
    }
  };

  const confirmarSeleccion = async () => {
    if (butacaElegida.length !== 0) {
      await axios
        .post("https://tucineya.herokuapp.com/api/butacas", {
          //.post("http://localhost:4000/api/butacas", {
          butacas: butacaElegida,
          idSala: idSala,
        })
        .then(() => {
          setButacaElegida([]);
          setConfirmar(!confirmar);
        });
    }
  };

  const handleLogout = () => {
    dispatch({
      type: types.logout,
    });
    history.replace("./");
  };

  return (
    <div className="row">
      <div className="d-flex justify-content-end">
        <HashRouter>
          <Link
            to="/buscarPelicula"
            className="col-2 align-items-center"
            onClick={() => {
              localStorage.removeItem("butacas");
            }}
          >
            Atras
          </Link>
        </HashRouter>
        <button
          className="nav-item nav-link btn white-text"
          onClick={handleLogout}
        >
          Cerrar Sesión
        </button>
      </div>
      <div className="col">
        {movies !== [] ? null : (
          <img
            src={movies[0].posterPelicula}
            alt={movies[0].idNombrePelicula}
          />
        )}
      </div>
      <div className="col">
        <ul className="showcase">
          <li>
            <div className="seat"></div>
            <small>Disponible</small>
          </li>
          <li>
            <div className="seat selected"></div>
            <small>Seleccionado</small>
          </li>
          <li>
            <div className="seat occupied"></div>
            <small>Ocupado</small>
          </li>
        </ul>

        <div className="container ">
          <div className="screen"></div>
          <div className="row">
            {filas.map((fila, j) => {
              return (
                <div className="row" key={j} value={fila}>
                  {asientosFila.map((asiento, i) => {
                    return (
                      <div
                        className={
                          butacasConfirmadas.includes(fila + asiento)
                            ? "seat occupied"
                            : butacaElegida.includes(fila + asiento)
                            ? "seat selected"
                            : "seat"
                        }
                        style={
                          butacasConfirmadas.includes(fila + asiento)
                            ? { pointerEvents: "none" }
                            : null
                        }
                        disabled
                        unselectable="true"
                        key={i}
                        value={asiento}
                        onClick={() => seleccionarButaca(fila, asiento)}
                      ></div>
                    );
                  })}
                </div>
              );
            })}
          </div>
          <button
            className="btn btn-primary"
            onClick={() => confirmarSeleccion()}
          >
            Confirmar
          </button>
        </div>

        <p className="text">
          You have selected <span id="count">0</span> seats for the price of $
          <span id="total">0</span>!
        </p>
      </div>
    </div>
  );
};
